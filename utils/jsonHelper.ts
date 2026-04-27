import fs from "fs";
import path from "path";

const filePath = path.resolve(
  __dirname,
  "../test-data/applicationData.json"
);

export function saveApplicationData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function readApplicationData() {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}