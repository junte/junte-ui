import { AfterContentChecked, AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PrismComponent } from '@ngx-prism/core/dist/prism.component';
import { html, js } from 'js-beautify';
import { UI } from 'junte-ui';
import { Language } from './enum';

@Component({
  selector: 'app-code-highlight',
  templateUrl: './code-highlight.component.html',
  styleUrls: ['./code-highlight.component.scss']
})
export class CodeHighlightComponent implements AfterContentChecked {

  ui = UI;

  private _source: string;

  @Input() file: string;
  @Input() language: Language = Language.html;

  @ViewChild('pre', {static: true})
  pre: ElementRef<HTMLPreElement>;

  @ViewChild('prism', {static: true})
  prism: PrismComponent;

  copied = false;
  code = '';

  private formatHTML(source: string) {
    return source.replace(/\n *\>/g, '>')
      .replace(/\> +\</g, '><');
  }

  ngAfterContentChecked() {
    const source = this.pre.nativeElement.innerText;
    if (this._source !== source) {
      this._source = source;
      this.render();
    }
  }

  private render() {
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

    this.prism.highlightElement({
      code: this.code,
      language: this.language
    });
  }

  copy() {
    this.copied = true;
    setTimeout(() => this.copied = false, 2100);
  }
}
