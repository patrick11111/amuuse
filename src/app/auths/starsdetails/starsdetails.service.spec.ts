import { TestBed } from '@angular/core/testing';

import { StarsdetailsService } from './starsdetails.service';

describe('StarsdetailsService', () => {
  let service: StarsdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarsdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
