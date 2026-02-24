import fs from 'fs';
import path from 'path';

const usersFilePath = path.resolve(__dirname, '../storage/users.json');

export function saveUserData(email: string, password: string) {
  let users: { email: string; password: string }[] = [];

  // Read existing users.json
  if (fs.existsSync(usersFilePath)) {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    try {
      users = JSON.parse(data);
    } catch {
      users = [];
    }
  }

  // Add new user
  users.push({ email, password });

  // Write back to file
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}