import { TestBed } from '@angular/core/testing';

import { JunteUiService } from './junte-ui.service';

describe('JunteUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JunteUiService = TestBed.get(JunteUiService);
    expect(service).toBeTruthy();
  });
});
