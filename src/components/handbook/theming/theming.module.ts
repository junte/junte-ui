import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, IconModule, LabelModule, LinkModule, StackModule } from 'junte-ui';
import { ResourcesModule } from 'src/components/handbook/shared/resources/resources.module';
import { ThemingRoutingModule } from './theming-routing.module';
import { ThemingComponent } from './theming.component';

@NgModule({
  imports: [
    CommonModule,
    ThemingRoutingModule,
    IconModule,
    LabelModule,
    LinkModule,
    StackModule,
    GridModule,
    ResourcesModule
  ],
  exports: [
    ThemingComponent
  ],
  declarations: [
    ThemingComponent
  ],
})
export class ThemingModule {
}
