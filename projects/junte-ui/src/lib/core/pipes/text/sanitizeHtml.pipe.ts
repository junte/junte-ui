import { Inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({name: 'sanitizeHtml'})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(@Inject(DomSanitizer) private _sanitizer: DomSanitizer) {
  }

  transform(innerHTML: string): SafeHtml {
    return innerHTML ? this._sanitizer.bypassSecurityTrustHtml(innerHTML) : '';
  }
}
