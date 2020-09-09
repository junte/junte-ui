import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {GridModule, IconModule, LabelModule, LinkModule, StackModule} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { ThemingComponent } from './theming.component';
import { ResourcesModule } from 'src/components/docs/shared/resources/resources.module';

@NgModule({
  imports: [
    CommonModule,
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
