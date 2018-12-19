import { TestBed } from '@angular/core/testing';

import { AuthGaurdsService } from './auth-gaurds.service';

describe('AuthGaurdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGaurdsService = TestBed.get(AuthGaurdsService);
    expect(service).toBeTruthy();
  });
});
