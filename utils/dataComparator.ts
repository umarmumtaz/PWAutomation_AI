import { expect } from "@playwright/test";

export function compareApplicationData(
  candidateData: any,
  employerData: any
) {

  expect(candidateData).toEqual(employerData);

}