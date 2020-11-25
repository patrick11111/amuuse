import { TestBed } from '@angular/core/testing';

import { YourbookingsService } from './yourbookings.service';

describe('YourbookingsService', () => {
  let service: YourbookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourbookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
