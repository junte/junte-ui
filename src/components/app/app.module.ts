import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JunteUiModule, ru } from 'junte-ui';
import { getJunteUiConfig } from '../../utils/config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config = getJunteUiConfig();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JunteUiModule.forRoot(config)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
