import { Injectable } from '@angular/core';
import { mockUser } from '../data/mock-data';
import { Observable, of } from 'rxjs';
import { User, UserRole } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = mockUser;

  constructor() {
  }

  findUserById(id: number): Observable<User> {
    return of(this.users.find(user => user.id === id))
  }

  findAllUsers(): Observable<User[]> {
    return of(this.users)
  }

  findAllUsersByUserName(username: string): Observable<User[]> {
    return of(this.users
      .filter(user => user.username === username))
  }

  findAllUsersByRole(role: UserRole): Observable<User[]> {
    return of(this.users
      .filter(user => user.role === role))
  }
}
