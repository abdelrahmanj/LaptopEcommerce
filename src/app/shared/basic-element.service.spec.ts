import { TestBed } from '@angular/core/testing';

import { BasicElementService } from './basic-element.service';

describe('BasicElementService', () => {
  let service: BasicElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
