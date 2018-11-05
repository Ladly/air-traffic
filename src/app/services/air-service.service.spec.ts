import { TestBed } from '@angular/core/testing';

import { AirServiceService } from './air-service.service';

describe('AirServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirServiceService = TestBed.get(AirServiceService);
    expect(service).toBeTruthy();
  });
});
