import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CollectionsModule } from './components/collections/collections.module';
import { DynamicModule } from './components/dynamic/dynamic.module';
import { ElementsModule } from './components/elements/elements.module';
import { UiFormsModule } from './components/forms/forms.module';
import { GeneralModule } from './components/general/general.module';
import { LayoutModule } from './components/layout/layout.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { OverlaysModule } from './components/overlays/overlays.module';
import { AnimationPipeModule } from './pipes/animation-pipe.module';
import { ArrayPipeModule } from './pipes/array-pipe.module';
import { ColorPipeModule } from './pipes/color-pipe.module';
import { ConvertionPipeModule } from './pipes/convertion-pipe.module';
import { DatePipeModule } from './pipes/date-pipe.module';
import { IsEqualPipeModule } from './pipes/is-equal.module';
import { SanitizePipeModule } from './pipes/sanitize.module';
import { SumPipeModule } from './pipes/sum-pipe.module';
import { TextPipeModule } from './pipes/text-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CollectionsModule,
    DynamicModule,
    ElementsModule,
    UiFormsModule,
    GeneralModule,
    LayoutModule,
    NavigationModule,
    OverlaysModule,

    AnimationPipeModule,
    ArrayPipeModule,
    ColorPipeModule,
    ConvertionPipeModule,
    DatePipeModule,
    IsEqualPipeModule,
    SanitizePipeModule,
    SumPipeModule,
    TextPipeModule
  ]
})
export class JunteUiModule {
}
