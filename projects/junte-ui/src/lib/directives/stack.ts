import {Directive, HostBinding, Input} from '@angular/core';

export class Stack {
  gutter: number;
}

@Directive({
  selector: '[jntStack]'
})
export class StackDirective {

  @Input('jntStack')
  stack: Stack;

  @HostBinding('style.margin')
  get margin() {
    return this.stack.gutter + ' px';
  }

}
