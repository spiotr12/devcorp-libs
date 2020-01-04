import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';


export abstract class NgUnsubscribe implements OnDestroy {

  protected ngUnsubscribe: Subject<void> = new Subject();

  ngOnDestroy(): void {
    // TODO: Test it and debug
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
