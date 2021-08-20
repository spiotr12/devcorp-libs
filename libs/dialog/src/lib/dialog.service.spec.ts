import { TestBed } from '@angular/core/testing';

import { DclDialogService } from './dialog.service';

describe('DialogService', () => {
  let service: DclDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DclDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
