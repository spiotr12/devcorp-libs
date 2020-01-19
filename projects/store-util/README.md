# StoreUtil

Utility for @nxrx/store to handle subscriptions more effectively

## Usage

    @Component({
        // ...
    })
    export class CategoriesManagerComponent {
    
        public data$: Observable<any>;
    
        constructor(private store: Store<any>) {
            this.data$ = StoreUtil.select(this.store, selector);
            // or
            this.data$ = StoreUtil.select(this.store, selector, this.ngUnsubscribe);
        }
    
    }
