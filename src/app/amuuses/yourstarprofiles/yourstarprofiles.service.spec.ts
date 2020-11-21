import { TestBed } from '@angular/core/testing';

import { YourstarprofilesService } from './yourstarprofiles.service';

describe('YourstarprofilesService', () => {
  let service: YourstarprofilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourstarprofilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
