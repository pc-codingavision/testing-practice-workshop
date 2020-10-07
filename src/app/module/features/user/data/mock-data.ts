import { UserRole, User } from '../model/User';

export const mockUsers: Array<User> = [
  {
    id: 1,
    name: 'Name 1',
    surname: 'Surname 1',
    username: 'Username1',
    role: UserRole.BASIC
  },
  {
    id: 2,
    name: 'Name 2',
    surname: 'Surname 2',
    username: 'Username2',
    role: UserRole.GOLD
  },
  {
    id: 3,
    name: 'Name 3',
    surname: 'Surname 3',
    username: 'Username3',
    role: UserRole.PLATINUM
  },
];

