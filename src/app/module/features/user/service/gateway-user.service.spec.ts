import { GatewayUserService } from './gateway-user.service';
import { fail } from 'assert';
import { mockUsers } from '../data/mock-data';
import * as _ from 'lodash';
import { UserRole } from '../model/User';

/**
 * Implement the following test cases by using the TestBed Angular facility and a spy
 * for the related dependency.
 */
xdescribe('GatewayUserService', () => {
  let gatewayUserService: GatewayUserService;

  describe('#findUserById', () => {
    it('#findUserById should return user for existing id', () => {
      fail('Method not implemented, yet');
    });
    it('#findUserById should return empty for not existing id', () => {
      fail('Method not implemented, yet');
    });
    it('should call the UserService#findUserById', () => {
      fail('Method not implemented, yet');
    });
    it('should call the UserService#findUserById only once', () => {
      fail('Method not implemented, yet');
    });
    it('should call the UserService#findUserById with the passed id', () => {
      fail('Method not implemented, yet');
    });
    it('should return empty when the UserService#findUserById returns an empty Observable', () => {
      fail('Method not implemented, yet');
    });
  });
  describe('#findAllUsers', () => {
    it('#findAllUsers should return all users', () => {
      fail('Method not implemented, yet');
    });
    it('should return an empty array when UserService#findAllUsers return an Observable of an empty array', () => {
      fail('Method not implemented, yet');
    });
    it('should call UserService#findAllUsers', () => {
      fail('Method not implemented, yet');
    });
    it('should call UserService#findAllUsers less than two times', () => {
      fail('Method not implemented, yet');
    });
    it('should call UserService#findAllUsers with no parameters', () => {
      fail('Method not implemented, yet');
    });
  });
  describe('#findAllUsersByUserName', () => {
    it('#findAllUsersByUserName should return user for existing username', () => {
      gatewayUserService.findAllUsersByUserName('Username2')
        .subscribe(users => expect(users[0]).toEqual(
          _.pick({
            id: 2,
            name: 'Name 2',
            surname: 'Surname 2',
            username: 'Username2',
            role: UserRole.GOLD
          }, ['id', 'username', 'role'])
        ));
    });
    it('#findAllUsersByUserName should return empty for not existing username', () => {
      gatewayUserService.findAllUsersByUserName('Username20')
        .subscribe(users => expect(users.length).toEqual(0));
    });
    it('should call UserService#findAllUsersByUserName only once', () => {
      fail('Method not implemented, yet');
    });
  });
  describe('#findAllUsersByRole', () => {
    it('#findAllUsersByRole should return user for specified role', () => {
      gatewayUserService.findAllUsersByRole(UserRole.GOLD)
        .subscribe(users => expect(users[0]).toEqual(
          _.pick({
            id: 2,
            name: 'Name 2',
            surname: 'Surname 2',
            username: 'Username2',
            role: UserRole.GOLD
          }, ['id', 'username', 'role'])
        ));
    });
    it('#findAllUsersByRole should return empty for specified role', () => {
      gatewayUserService.findAllUsersByRole(UserRole.VIP)
        .subscribe(users => expect(users.length).toEqual(0));

    });
    it('should call UserService#findAllUsersByRole', () => {
      fail('Method not implemented, yet');
    });
  });

  // ****************************************//
  // ADD MORE TESTS IF YOU WISH TO DO SO ;) //
  // ***************************************//
});
