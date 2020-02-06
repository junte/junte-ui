import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PrismComponent } from '@ngx-prism/core/dist/prism.component';
import { html, js } from 'js-beautify';
import { UI } from 'junte-ui';
import { Language } from './enum';

@Component({
  selector: 'app-code-highlight',
  templateUrl: './code-highlight.component.html',
  styleUrls: ['./code-highlight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeHighlightComponent implements AfterViewInit {

  ui = UI;

  private _source: string;

  copied = false;
  code = '';

  @Input() file: string;
  @Input() language: Language = Language.html;

  @ViewChild('pre', {static: true})
  pre: ElementRef<HTMLPreElement>;

  @ViewChild('prism', {static: true})
  prism: PrismComponent;

  private formatHTML(source: string) {
    return source.replace(/\n *\>/g, '>')
      .replace(/\> +\</g, '><');
  }

  constructor(private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.render();
  }

  render() {
    const source = this.pre.nativeElement.innerText;
    if (this._source !== source) {
      this._source = source;
      let code = this._source.trim();
      switch (this.language) {
        case Language.html:
          code = html(code, {
            wrap_attributes: 'force-expand-multiline',
            indent_level: 0,
            wrap_attributes_indent_size: 4
          });
          code = this.formatHTML(code);
          break;
        case Language.javascript:
          code = js(code);
          break;
      }

      this.code = code;
      this.cd.detectChanges();
      this.prism.highlightElement({
        code: this.code,
        language: this.language
      });
    }
  }

  copy() {
    this.copied = true;
    setTimeout(() => this.copied = false, 2100);
  }
}
