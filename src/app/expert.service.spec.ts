import { TestBed } from '@angular/core/testing';

import { ExpertService } from './expert.service';

describe('ExpertService', () => {
  let service: ExpertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
