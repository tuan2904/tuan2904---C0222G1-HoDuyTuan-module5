import { TestBed } from '@angular/core/testing';

import { DictionaryServicService } from './dictionary-servic.service';

describe('DictionaryServicService', () => {
  let service: DictionaryServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
