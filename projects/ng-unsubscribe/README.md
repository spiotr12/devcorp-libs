# NgUnsubscribe

Base class for handling unsubscribe on destroy

## Usage

Just extend NgUnsubscribe class and use `takeUntil(this.ngUnsubscribe)` pipe on each observable

Example how to use it

    @Component({
      ...
    })
    export class MyComponent extends NgUnsubscribe {
    
      public readonly sub$: Observable<any>;
    
      constructor() {
        super();
        
        this.sub$ = of({}).pipe(
          takeUntil(this.ngUnsubscribe),
        )        
      }
    }
