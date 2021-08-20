# NgStreamsKiller

Base class for handling unsubscribe on destroy

## Usage

Just extend DclNgStreamsKiller class and use `takeUntil(this.killer$)` pipe on each observable

Example how to use it

```typescript
@Component({
  ...
})
export class MyComponent extends DclNgStreamsKiller {

  public readonly sub$: Observable<any>;

  constructor() {
    super();

    this.sub$ = of({}).pipe(
      takeUntil(this.killer$),
    )
  }
}
```
