import { Subject } from 'rxjs';

export class DclDialogRef<TResult> {

  private _afterClosed = new Subject<TResult | null | undefined>();

  public close(reason?: TResult | null): void {
    this._afterClosed.next(reason);
    this._afterClosed.complete();
  }

  public afterClosed() {
    return this._afterClosed.asObservable();
  }
}
