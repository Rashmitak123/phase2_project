import { TestBed } from '@angular/core/testing';

import { VegesService } from './veges.service';

describe('VegesService', () => {
  let service: VegesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
