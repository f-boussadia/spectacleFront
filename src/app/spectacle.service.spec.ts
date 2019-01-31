import { TestBed } from '@angular/core/testing';

import { SpectacleService } from './spectacle.service';

describe('SpectacleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpectacleService = TestBed.get(SpectacleService);
    expect(service).toBeTruthy();
  });
});
