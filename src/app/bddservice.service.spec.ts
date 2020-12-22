import { TestBed } from '@angular/core/testing';

import { BddserviceService } from './bddservice.service';

describe('BddserviceService', () => {
  let service: BddserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BddserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
