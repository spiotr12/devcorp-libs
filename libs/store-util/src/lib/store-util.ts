import { select, Store } from '@ngrx/store';
import { MemoizedSelector } from '@ngrx/store/src/selector';
import { Observable } from 'rxjs';
import { publishReplay, refCount, takeUntil } from 'rxjs/operators';


export class StoreUtil {
  // use to share the same store value across multiple AsyncPipe uses
  // (by default, AsyncPipe creates new subscription for each pipe occurrence)
  public static select<TStore, TResult>(store: Store<TStore>,
                                        selector: MemoizedSelector<TStore, TResult>,
                                        unsubscribe?: Observable<any>): Observable<TResult> {
    const state = store.pipe(
      select(selector),
      publishReplay(1),
      refCount(),
    );
    if (unsubscribe) {
      state.pipe(takeUntil(unsubscribe));
    }
    return state;
  }
}
