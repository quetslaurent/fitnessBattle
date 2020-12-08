import { TestBed } from '@angular/core/testing';

import { TrainingDatesApiService } from './training-dates-api.service';

describe('TrainingDatesApiService', () => {
  let service: TrainingDatesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingDatesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
