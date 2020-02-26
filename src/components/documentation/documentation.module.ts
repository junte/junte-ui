import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppFooterModule } from 'src/components/app-footer/app-footer.module';
import {
  AppLayoutModule,
  BreadcrumbsModule,
  MenuModule,
  ThemeSwitcherModule,
  StackModule,
  ModalModule,
  PopoverModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from '../../consts';
import { OutletModule } from '../outlet/outlet.module';
import { SelectLangModule } from '../select-lang/select-lang.module';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { ModalTestFactoryComponent } from './overlays/modal/test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OutletModule,
    AppLayoutModule.forRoot(JUNTE_UI_CONFIG),
    MenuModule.forRoot(JUNTE_UI_CONFIG),
    BreadcrumbsModule.forRoot(JUNTE_UI_CONFIG),
    ThemeSwitcherModule.forRoot(JUNTE_UI_CONFIG),
    PopoverModule.forRoot(JUNTE_UI_CONFIG),
    ModalModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    SelectLangModule,
    AppFooterModule,
    DocumentationRoutingModule
  ],
  declarations: [
    DocumentationComponent,
  ],
  entryComponents: [
    ModalTestFactoryComponent
  ]
})
export class DocumentationModule {

}
