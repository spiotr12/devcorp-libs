import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, StaticProvider, Type } from '@angular/core';
import { DCL_DIALOG_DATA } from './dialog-data';
import { DclDialogRef } from './dialog-ref';
import { IDclDialogOptions } from './dialog-options.interface';

@Injectable()
export class DclDialogService {

  constructor(@Inject(DOCUMENT) private readonly document: Document,
              private readonly componentFactoryResolver: ComponentFactoryResolver,
              private readonly injector: Injector,
              private readonly applicationRef: ApplicationRef) { }

  public open<TComponent, TData, TResult>(component: Type<TComponent>, options: IDclDialogOptions<TData> = {}): DclDialogRef<TResult> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const dialogRef = new DclDialogRef<TResult>();

    const providers: StaticProvider[] = [
      { provide: DCL_DIALOG_DATA, useValue: options.data },
      { provide: DclDialogRef, useValue: dialogRef },
    ];
    const injector = Injector.create({ parent: this.injector, providers });

    const componentRef = componentFactory.create(injector);

    const appRoot = this.document.body;
    appRoot.appendChild(componentRef.location.nativeElement);

    this.applicationRef.attachView(componentRef.hostView);

    dialogRef.afterClosed().subscribe(() => {
      this.applicationRef.detachView(componentRef.hostView);
      appRoot.removeChild(componentRef.location.nativeElement);
      componentRef.destroy();
    });

    return dialogRef;
  }
}
