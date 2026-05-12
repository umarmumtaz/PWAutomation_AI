import fs from 'fs';
import path from 'path';

const usersFilePath = path.resolve(
  process.cwd(),
  'storage',
  'users.json'
);

export function saveUserData(
  email: string,
  password: string
) {

  let users = [];

  if (fs.existsSync(usersFilePath)) {

    const fileData =
      fs.readFileSync(usersFilePath, 'utf-8');

    try {

      users = JSON.parse(fileData);

    } catch {

      users = [];
    }
  }

  users.push({
    email,
    password
  });

  fs.writeFileSync(
    usersFilePath,
    JSON.stringify(users, null, 2)
  );

  console.log('User saved successfully');
}