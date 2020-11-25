import { TestBed } from '@angular/core/testing';

import { FindyourstarsService } from './findyourstars.service';

describe('FindyourstarsService', () => {
  let service: FindyourstarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindyourstarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
