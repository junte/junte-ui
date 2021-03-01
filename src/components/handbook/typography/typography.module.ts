import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, IconModule, LinkModule, StackModule } from 'junte-ui';
import { ResourcesModule } from 'src/components/handbook/shared/resources/resources.module';
import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';

@NgModule({
  imports: [
    CommonModule,
    TypographyRoutingModule,
    IconModule,
    LinkModule,
    StackModule,
    GridModule,
    ResourcesModule
  ],
  exports: [
    TypographyComponent
  ],
  declarations: [
    TypographyComponent
  ],
})
export class TypographyModule {
}
