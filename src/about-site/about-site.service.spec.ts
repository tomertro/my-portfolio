import { TestBed } from '@angular/core/testing';

import { AboutSiteService } from './about-site.service';

describe('AboutSiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutSiteService = TestBed.get(AboutSiteService);
    expect(service).toBeTruthy();
  });
});
