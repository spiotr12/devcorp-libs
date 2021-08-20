import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class DclNgStreamsKiller implements OnDestroy {

  public killer$ = new Subject();

  ngOnDestroy(): void {
    this.killer$.next();
    this.killer$.complete();
  }

}
