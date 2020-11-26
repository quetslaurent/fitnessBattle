import { TestBed } from '@angular/core/testing';

import { TrainingsApiService } from './trainings-api.service';

describe('TrainingsApiService', () => {
  let service: TrainingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
