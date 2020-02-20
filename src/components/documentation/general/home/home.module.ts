import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismModule } from '@ngx-prism/core';
import { LinkModule, IconModule, GridModule } from 'junte-ui';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
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

