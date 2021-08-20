import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class DclStreamsKiller implements OnDestroy {

  public killer$ = new Subject();

  ngOnDestroy(): void {
    this.killer$.next();
    this.killer$.complete();
  }

}
