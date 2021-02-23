import { TestBed } from '@angular/core/testing';

import { EchoWebWorkerService } from './echo-web-worker.service';

describe('EchoWebWorkerService', () => {
  let service: EchoWebWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EchoWebWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
