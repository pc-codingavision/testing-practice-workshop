import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { EMPTY, Observable, of } from 'rxjs';
import { User, UserRole } from '../model/User';
import { isEmpty, map, tap } from 'rxjs/operators';

export class GatewayUser {
  id: number;
  username: string;
  role: UserRole;

  static getInstance(user: User): GatewayUser {
    if (user) {
      return {
        id: user.id,
        username: user.username,
        role: user.role
      };
    } else {
      return null;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class GatewayUserService {

  constructor(private userService: UserService) {
  }

  findUserById(id: number): Observable<GatewayUser> {
    const user$ = this.userService.findUserById(id);

    return user$
      .pipe(
        map(user => GatewayUser.getInstance(user))
      );
  }

  findAllUsers(): Observable<GatewayUser[]> {
    return this.userService.findAllUsers()
      .pipe(
        map(users => users.map(user => GatewayUser.getInstance(user)))
      );
  }

  findAllUsersByUserName(username: string): Observable<GatewayUser[]> {
    return this.userService.findAllUsersByUserName(username)
      .pipe(
        map(users => users.map(user => GatewayUser.getInstance(user)))
      );
  }

  findAllUsersByRole(role: UserRole): Observable<GatewayUser[]> {
    return this.userService.findAllUsersByRole(role)
      .pipe(
        map(users => users.map(user => GatewayUser.getInstance(user)))
      );
  }
}
