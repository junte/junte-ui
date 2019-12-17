import { AfterContentChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { PrismComponent } from '@ngx-prism/core/dist/prism.component';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-code-highlight',
  templateUrl: './code-highlight.component.html',
  styleUrls: ['./code-highlight.component.scss']
})
export class CodeHighlightComponent implements AfterContentChecked {

  ui = UI;

  @ViewChild('pre', {static: true})
  pre: ElementRef<HTMLPreElement>;

  @ViewChild('prism', {static: true})
  prism: PrismComponent;

  code = '';

  private format(source: string) {
    return source
      .replace(/^\s+/g, '')
      .replace(/(\s|\t)+/g, ' ')
      .replace(/\[+/g, '\n\t[')
      .replace(/ +/g, '\t')
      .replace(/\>(\s|\t)+\</g, '>\n\t<')
      .replace(/(\n\t)+/g, '\n\t');
  }

  ngAfterContentChecked() {
    this.code = this.format(this.pre.nativeElement.innerText);
    this.prism.highlightElement({
      code: this.code,
      language: 'html'
    });
  }

}
