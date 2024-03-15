import { TestBed } from '@angular/core/testing';

import { CabAgencyService } from './cab-agency.service';

describe('CabAgencyService', () => {
  let service: CabAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
