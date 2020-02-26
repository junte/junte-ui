import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkModule, IconModule, GridModule } from 'junte-ui';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
    GridModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule {
}

