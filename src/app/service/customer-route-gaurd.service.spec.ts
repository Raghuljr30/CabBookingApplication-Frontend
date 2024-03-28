import { TestBed } from '@angular/core/testing';

import { CustomerRouteGaurdService } from './customer-route-gaurd.service';

describe('CustomerRouteGaurdService', () => {
  let service: CustomerRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
