import { Injectable } from '@angular/core';
import { mockUsers } from '../data/mock-data';
import { EMPTY, empty, Observable, of } from 'rxjs';
import { User, UserRole } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = mockUsers;

  constructor() {
  }

  findUserById(id: number): Observable<User> {
    const retrievedUser = this.users.find(user => user.id === id);
    return retrievedUser ? of(retrievedUser) : of(null);
  }

  findAllUsers(): Observable<User[]> {
    return of(this.users);
  }

  findAllUsersByUserName(username: string): Observable<User[]> {
    return of(this.users
      .filter(user => user.username === username));
  }

  findAllUsersByRole(role: UserRole): Observable<User[]> {
    return of(this.users
      .filter(user => user.role === role));
  }
}
