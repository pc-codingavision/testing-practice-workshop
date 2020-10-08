import { TestBed } from '@angular/core/testing';

import { GatewayUserService } from './gateway-user.service';
import { fail } from 'assert';

/**
 * Implement the following test cases without using the TestBed Angular facility.
 */
xdescribe('GatewayUserService', () => {
  let service: GatewayUserService;

  beforeEach()

  describe('#findUserById', () => {
    it('#findUserById should return user for existing id', () => {
      fail('Method not implemented, yet');
    });
    it('#findUserById should return empty for not existing id', () => {
      fail('Method not implemented, yet');
    });
  });
  describe('#findAllUsers', () => {
    it('#findAllUsers should return all users', () => {
      fail('Method not implemented, yet');
    });
  });
  describe('#findAllUsersByUserName', () => {
    it('#findAllUsersByUserName should return user for existing username', () => {
      fail('Method not implemented, yet');
    });
    it('#findAllUsersByUserName should return empty for not existing username', () => {
      fail('Method not implemented, yet');
    });
  });
  describe('#findAllUsersByRole', () => {
    it('#findAllUsersByRole should return user for specified role', () => {
      fail('Method not implemented, yet');
    });
    it('#findAllUsersByRole should return empty for specified role', () => {
      fail('Method not implemented, yet');
    });
  });
});
