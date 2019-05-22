import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  exports: [
    ColComponent,
    ContainerComponent,
    RowComponent
  ]
})
export class GridModule {
}
