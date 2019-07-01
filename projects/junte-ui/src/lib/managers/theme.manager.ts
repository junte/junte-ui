import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeManager {

  theme: string;

  set(theme: string, href: string) {
    this.clear();
    const link = this.create(theme);
    link.setAttribute('href', href);
    this.theme = theme;
  }

  remove(theme: string) {
    const exist = document.head.querySelector(`link[rel="stylesheet"].${`theme-${theme}`}`);
    if (exist) {
      document.head.removeChild(exist);
      this.theme = null;
    }
  }

  clear() {
    this.remove(this.theme);
  }

  private create(theme: string) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.classList.add(`theme-${theme}`);
    document.head.appendChild(link);
    return link;
  }
}
