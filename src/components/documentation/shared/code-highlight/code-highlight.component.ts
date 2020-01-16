import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PrismComponent } from '@ngx-prism/core/dist/prism.component';
import { html } from 'js-beautify';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-code-highlight',
  templateUrl: './code-highlight.component.html',
  styleUrls: ['./code-highlight.component.scss']
})
export class CodeHighlightComponent implements AfterContentInit {

  ui = UI;

  @ViewChild('pre', {static: true})
  pre: ElementRef<HTMLPreElement>;

  @ViewChild('prism', {static: true})
  prism: PrismComponent;

  code = '';

  private format(source: string) {
    return source.replace(/\n +\>/g, '>')
      .replace(/\> +\</g, '><');
  }

  ngAfterContentInit() {
    let code = this.pre.nativeElement.innerText;
    code = html(code, {
      wrap_attributes: 'force-expand-multiline',
      wrap_attributes_indent_size: 4
    });
    code = this.format(code);
    this.code = code;

    setTimeout(() => {
      this.prism.highlightElement({
        code: this.code,
        language: 'html'
      });
    }, 1);
  }

}
