import path from 'path';
//upload resume file from the repo to the application
export function getTestFile(fileName: string) {
  // Resolves file path inside repo - uses project root/docs folder
  return path.resolve(process.cwd(), 'docs', fileName);
}






