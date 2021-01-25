import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('attr.theme')
  get theme() {
    return localStorage.theme || null;
  }

  @ViewChild('layout', {read: ElementRef, static: true})
  backdrop: ElementRef<HTMLElement>;

}
