import { TestBed } from '@angular/core/testing';

import { ConditionProfileService } from './condition-profile.service';

describe('ConditionProfileService', () => {
  let service: ConditionProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
