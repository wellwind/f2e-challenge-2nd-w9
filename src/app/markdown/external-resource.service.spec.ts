import { TestBed } from '@angular/core/testing';

import { ExternalResourceService } from './external-resource.service';

describe('ExternalResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalResourceService = TestBed.get(ExternalResourceService);
    expect(service).toBeTruthy();
  });
});
