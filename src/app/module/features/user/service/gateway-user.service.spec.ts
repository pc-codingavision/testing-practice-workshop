import { TestBed } from '@angular/core/testing';

import { GatewayUserService } from './gateway-user.service';

describe('GatewayUserService', () => {
  let service: GatewayUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewayUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
