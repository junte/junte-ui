import { Pipe, PipeTransform } from '@angular/core';

enum VisibleElement {
  hide = 'hide',
  show = 'show'
}

@Pipe({
  name: 'visible'
})

export class VisibleElementPipe implements PipeTransform {
  transform(visibility: boolean): string {
    return !!visibility ? VisibleElement.hide : VisibleElement.show;
  }
}
