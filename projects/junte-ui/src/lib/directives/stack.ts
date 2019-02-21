import {Directive, HostBinding, Input} from '@angular/core';

export class Stack {
  gutter: number;
}

@Directive({
  selector: '[juStack]'
})
export class StackDirective {

  @Input('juStack')
  stack: Stack;

  @HostBinding('style.margin')
  get margin() {
    console.log(this.stack);
    return this.stack.gutter + ' px';
  }

}
