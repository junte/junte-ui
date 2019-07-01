import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeManager {

  theme: string;
  path: string;

  set(theme: string) {
    if (this.theme === theme) {
      return;
    }

    this.clear();
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', `${this.path}/${theme}.css`);
    link.classList.add(`theme-${theme}`);
    document.head.appendChild(link);
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
}
