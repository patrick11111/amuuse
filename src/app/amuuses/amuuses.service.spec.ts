import { TestBed } from '@angular/core/testing';

import { AmuusesService } from './amuuses.service';

describe('AmuusesService', () => {
  let service: AmuusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmuusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
