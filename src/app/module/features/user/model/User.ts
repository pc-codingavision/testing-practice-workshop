export enum UserRole {
  BASIC,
  GOLD,
  PLATINUM,
  VIP
}

export class User {
  id: number;
  name: string;
  surname: string;
  username: string;
  role: UserRole;
}
