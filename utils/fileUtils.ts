import { Page } from '@playwright/test';
import path from 'path';

export function getTestFile(fileName: string) {
  return path.resolve(process.cwd(), 'docs', fileName);
}

/**
 * Computes a date relative to today, e.g. getRelativeDate({ yearsAgo: 4 })
 * for "4 years back". Returns pieces in the shapes both fillDate() and
 * selectDate() expect, so hardcoded dates like '26 June 2026' (which break
 * the day after you write them) can be replaced with something durable.
 */
export function getRelativeDate(offset: { yearsAgo?: number; monthsAgo?: number; daysAgo?: number }) {
  const d = new Date();
  if (offset.yearsAgo) d.setFullYear(d.getFullYear() - offset.yearsAgo);
  if (offset.monthsAgo) d.setMonth(d.getMonth() - offset.monthsAgo);
  if (offset.daysAgo) d.setDate(d.getDate() - offset.daysAgo);

  return {
    day: String(d.getDate()),
    monthNumber: String(d.getMonth() + 1),       // for fillDate()
    monthName: d.toLocaleString('en-US', { month: 'long' }), // for selectDate()
    year: String(d.getFullYear()),
  };
}

/**
 * PREFERRED: fills the date directly into the text input instead of
 * clicking through the calendar popup. Works when the field accepts typed
 * dates (no `readonly` attribute) — true for the "Date From" employment
 * field, which has placeholder="DD/MM/YYYY" and no readonly attribute.
 * Much simpler and more robust than driving the calendar UI, since it
 * completely avoids the overlapping day/month/year/decade/century panes.
 *
 * @param trigger  locator for the date input, e.g. page.getByRole('textbox', { name: 'Date From' })
 * @param day      e.g. "20"
 * @param month    numeric, e.g. "7" or "07"
 * @param year     e.g. "2026"
 */
export async function fillDate(
  trigger: ReturnType<Page['locator']>,
  day: string,
  month: string,
  year: string
) {
  const formatted = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  await trigger.click();
  await trigger.fill(formatted);
  await trigger.press('Tab'); // blur to commit the value and close the picker

  const invalidFeedback = trigger.locator('xpath=following-sibling::div[contains(@class,"invalid-feedback")]');
  if (await invalidFeedback.isVisible().catch(() => false)) {
    throw new Error(`fillDate: "${formatted}" was rejected as invalid by the field`);
  }
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Comparable number for "July 2026" style strings, e.g. 2026*12 + 6.
// Avoids locale-dependent Date string parsing entirely.
function monthYearToComparable(text: string): number {
  const [monthName, yearStr] = text.trim().split(/\s+/);
  const monthIndex = MONTHS.findIndex(m => m.toLowerCase() === monthName?.toLowerCase());
  if (monthIndex === -1 || !yearStr) {
    throw new Error(`monthYearToComparable: could not parse "${text}"`);
  }
  return parseInt(yearStr, 10) * 12 + monthIndex;
}

/**
 * FALLBACK: clicks through the calendar popup. Use only if fillDate()
 * doesn't work for a given field (e.g. it turns out to be readonly).
 *
 * VERIFIED against real markup from the "Date From" employment field.
 * This is Bootstrap Datepicker — the header is one combined "{Month} {Year}"
 * string (.datepicker-switch), and day cells are:
 *   <td class="day" role="button" aria-label="Date {day} {month} {year}">{day}</td>
 *
 * Direction (next vs prev) is auto-detected each iteration by comparing
 * the target month/year against whatever the header currently shows — the
 * caller never needs to know or guess which way to navigate, whether the
 * target is years in the past or future.
 *
 * Two things confirmed from the real HTML that are easy to get wrong:
 *   1. The widget keeps 5 overlapping panes (days/months/years/decades/
 *      centuries) in the DOM at once, hiding all but one via inline
 *      style="display:none" — every locator below needs :visible.
 *   2. This app's aria-labels are buggy for "old"/"new" (adjacent-month
 *      bleed-in/out) cells — they reuse the current month's name instead
 *      of the correct one, so the same label text can appear on two
 *      different cells. :not(.old):not(.new) is required, not optional,
 *      to get a unique match.
 *
 * @param trigger  locator for the input that opens the picker
 * @param day      target day, e.g. "20"
 * @param month    target month name, e.g. "July"
 * @param year     target year, e.g. "2026"
 * @param maxClicks safety cap (default covers ~5 years either direction)
 */
export async function selectDate(
  page: Page,
  trigger: ReturnType<Page['locator']>,
  day: string,
  month: string,
  year: string,
  maxClicks = 60
) {
  await trigger.click();

  const popup = page.locator('.datepicker:visible');
  await popup.waitFor({ state: 'visible', timeout: 5000 });

  const header = popup.locator('.datepicker-switch:visible');
  const targetHeader = `${month} ${year}`;
  const targetComparable = monthYearToComparable(targetHeader);

  for (let i = 0; i < maxClicks; i++) {
    const currentHeaderText = (await header.textContent())?.trim() ?? '';
    if (currentHeaderText === targetHeader) break;
    if (i === maxClicks - 1) {
      throw new Error(`selectDate: could not reach "${targetHeader}" after ${maxClicks} clicks (last seen: "${currentHeaderText}")`);
    }

    const currentComparable = monthYearToComparable(currentHeaderText);
    const direction = targetComparable < currentComparable ? 'prev' : 'next';
    const navBtn = popup.locator(`${direction === 'next' ? '.next' : '.prev'}:visible`);
    await navBtn.click();
  }

  const dayCell = popup.locator(
    `td.day:visible:not(.old):not(.new)[aria-label="Date ${day} ${month} ${year}"]`
  );
  await dayCell.click();
}