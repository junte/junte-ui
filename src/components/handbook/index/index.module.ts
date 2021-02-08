import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from 'src/components/handbook/index/index-routing.module';
import { IndexComponent } from 'src/components/handbook/index/index.component';
import { JunteUiModule } from 'junte-ui';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    JunteUiModule,
    IndexRoutingModule,
  ]
})
export class IndexModule { }
