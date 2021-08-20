# Dialog

A dialog service similar to the `@angular/material/dialog` so it can be used to create dialogs
anywhere with any libraries in the same fashion.

It appends the component to the body, so any overlay and client window positioning need to be
handled.

## Usage

```typescript
@Component()
class YourDialogComponent {}

@Component()
class YourComponent {

  constructor(private readonly dialog: DclDialogService) { }

  public showDialog() {
    const dialogRef = this.dialog.open(YourDialogComponent, { data: {} });

    dialogRef.afterClosed().subscribe(result => {
      // Do something
    });
  }
}
```
