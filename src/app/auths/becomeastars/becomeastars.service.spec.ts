import { TestBed } from '@angular/core/testing';

import { BecomeastarsService } from './becomeastars.service';

describe('BecomeastarsService', () => {
  let service: BecomeastarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BecomeastarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
