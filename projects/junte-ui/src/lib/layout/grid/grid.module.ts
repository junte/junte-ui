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
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  entryComponents: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  exports: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ]
})
export class GridModule {
}
