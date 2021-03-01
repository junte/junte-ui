import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsTestModule } from 'src/components/handbook/collections/collections-test.module';
import { DynamicTestModule } from 'src/components/handbook/dynamic/dynamic-test.module';
import { ElementsTestModule } from 'src/components/handbook/elements/elements-test.module';
import { FormsTestModule } from 'src/components/handbook/forms/forms-test.module';
import { HomeModule } from 'src/components/handbook/home/home.module';
import { IndexRoutingModule } from 'src/components/handbook/index/index-routing.module';
import { IndexComponent } from 'src/components/handbook/index/index.component';
import { JunteUiModule } from 'junte-ui';
import { LayoutTestModule } from 'src/components/handbook/layout/layout-test.module';
import { NavigationTestModule } from 'src/components/handbook/navigation/navigation-test.module';
import { OtherTestModule } from 'src/components/handbook/other/other-test.module';
import { OverlaysTestModule } from 'src/components/handbook/overlays/overlays-test.module';
import { SectionModule } from 'src/components/handbook/shared/section/section.module';
import { ThemingModule } from 'src/components/handbook/theming/theming.module';
import { TypographyModule } from 'src/components/handbook/typography/typography.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    JunteUiModule,
    IndexRoutingModule,
    SectionModule,
    LayoutTestModule,
    NavigationTestModule,
    CollectionsTestModule,
    ElementsTestModule,
    FormsTestModule,
    OtherTestModule,
    DynamicTestModule,
    OverlaysTestModule,
    ThemingModule,
    TypographyModule,
    HomeModule
  ]
})
export class IndexModule { }
