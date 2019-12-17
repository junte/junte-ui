import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColComponent } from './col/col.component';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColComponent,
    ContainerComponent,
    RowComponent
  ],
  entryComponents: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  exports: [
    ColComponent,
    ContainerComponent,
    RowComponent
  ]
})
export class GridModule {
}
