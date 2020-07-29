import { TestBed } from '@angular/core/testing';
import { ConfirmCanDeactivateGuard } from './confirm-can-deactivate.guard';

describe('ConfirmCandeactivateGuard', () => {
  let guard: ConfirmCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
