import { TestBed } from '@angular/core/testing';

import { CabAgencyRouteGaurdService } from './cab-agency-route-gaurd.service';

describe('CabAgencyRouteGaurdService', () => {
  let service: CabAgencyRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabAgencyRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
