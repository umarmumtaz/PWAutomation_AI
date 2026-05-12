import fs from 'fs';
import path from 'path';

const applicationFolder = path.resolve(
  process.cwd(),
  'test-data',
  'applications'
);

export function saveApplicationData(
  data: any,
  fileName: string
) {

  if (!fs.existsSync(applicationFolder)) {

    fs.mkdirSync(applicationFolder, {
      recursive: true
    });
  }

  const filePath = path.join(
    applicationFolder,
    `${fileName}.json`
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  );

  console.log(`Data saved to: ${filePath}`);
}

export function readApplicationData(
  fileName: string
) {

  const filePath = path.join(
    applicationFolder,
    `${fileName}.json`
  );

  return JSON.parse(
    fs.readFileSync(filePath, 'utf-8')
  );
}