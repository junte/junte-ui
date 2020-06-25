import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from 'src/components/docs/components/components-routing.module';
import { ComponentsComponent } from 'src/components/docs/components/components.component';
import { JunteUiModule } from 'junte-ui';

@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    JunteUiModule,
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
