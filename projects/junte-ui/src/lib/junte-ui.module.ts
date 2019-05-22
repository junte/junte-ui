import { NgModule } from '@angular/core';
import { JunteUiComponent } from './junte-ui.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLayoutModule } from './components/app-layout';
import { AvatarModule } from './components/avatar';
import { BadgeModule } from './components/badge';
import { BlockModule } from './components/block';
import { CircleBarModule } from './components/circle-bar';
import { BreadcrumbsModule } from './components/breadcrumbs';
import { ButtonModule } from './components/button';
import { CalendarModule } from './components/calendar';
import { CardModule } from './components/card';
import { FormModule } from './components/form';
import { GridModule } from './components/grid';
import { IconModule } from './components/icon';
import { MenuModule } from './components/menu';
import { PaginationModule } from './components/pagination';
import { SkeletonModule } from './components/skeleton';
import { SpinnerModule } from './components/spinner';
import { StackModule } from './components/stack';
import { TableModule } from './components/table';
import { TabsModule } from './components/tabs';
import { DatePipeModule } from './pipes/date-pipe.module';
import { AnimationPipeModule } from './pipes/animation-pipe.module';
import { JunteDirectiveModule } from './directives/junte-directive.module';
import { InputModule } from './components/input';
import { SelectModule } from './components/select';
import { CheckboxModule } from './components/checkbox';
import { LabelModule } from './components/label';
import { LinkModule } from './components/link';
import { RadioModule } from './components/radio';
import { SwitchModule } from './components/switch';

@NgModule({
  declarations: [
    JunteUiComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppLayoutModule,
    AnimationPipeModule,
    AvatarModule,
    BadgeModule,
    BlockModule,
    BreadcrumbsModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    CircleBarModule,
    DatePipeModule,
    FormModule,
    GridModule,
    JunteDirectiveModule,
    IconModule,
    InputModule,
    LabelModule,
    LinkModule,
    MenuModule,
    PaginationModule,
    RadioModule,
    SelectModule,
    SkeletonModule,
    SpinnerModule,
    StackModule,
    SwitchModule,
    TableModule,
    TabsModule
  ]
})
export class JunteUiModule {
}
