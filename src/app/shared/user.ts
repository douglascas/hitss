export enum UserType {
  Common = 'COMMON',
  Admin = 'ADMIN',
}

export class User {
  id: number;
  name: string;
  type: UserType;
  password: string;
  email: string;
  birthDate: Date;
  created: Date;
}
