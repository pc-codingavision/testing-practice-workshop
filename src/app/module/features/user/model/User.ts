export enum UserRole {
  BASIC,
  GOLD,
  PLATINUM
}

export class User {
  id: number;
  name: string;
  surname: string;
  username:string;
  role: UserRole;
}
