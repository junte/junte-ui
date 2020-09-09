import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {GridModule, IconModule, LinkModule, StackModule} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { TypographyTestComponent } from './typography-test.component';
import { ResourcesModule } from 'src/components/docs/shared/resources/resources.module';

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
