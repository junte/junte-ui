import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, IconModule, LinkModule, StackModule } from 'junte-ui';
import { ResourcesModule } from 'src/components/handbook/shared/resources/resources.module';
import { TypographyTestComponent } from './typography-test.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    LinkModule,
    StackModule,
    GridModule,
    ResourcesModule
  ],
  exports: [
    TypographyTestComponent
  ],
  declarations: [
    TypographyTestComponent
  ],
})
export class TypographyTestModule {
}
