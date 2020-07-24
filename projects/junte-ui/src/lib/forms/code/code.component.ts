import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-code',
  templateUrl: './code.encapsulated.html'
})
export class CodeComponent {

  ui = UI;

  @PropertyApi({
    description: 'Count of inputs',
    type: 'int',
    default: 4,
  })
  @Input()
  length: number;

  @Input() readonly code?: string | number;
  @ViewChildren('input') inputs: QueryList<ElementRef>;
  @Output() codeChanged = new EventEmitter<string>();
  @Output() codeCompleted = new EventEmitter<string>();

  // ngAfterViewInit(): void {
  //   this.onInputCodeChanges();
  // }
  //
  //
  // private onInputCodeChanges(): void {
  //   if (!this.inputs.length) {
  //     return;
  //   }
  //
  //   if (this.isEmpty(this.code)) {
  //     // this.inputs.forEach(input => this.setInputValue(input, null));
  //     return;
  //   }
  //
  //   // const chars = this.code.toString().split('');
  //
  //   // this.inputs.forEach((input, index) => this.setInputValue(input, chars[index]));
  // }

  onInput(e: any, i: number): void {
    const next = i + 1;
    const target = e.target;
    const value = e.data || target.value;

    if (this.isEmpty(value)) {
      return;
    }


    // this.setInputValue(target, value.toString().charAt(0));
    // this.emitChanges();

    console.log(this.length);
    if (next > this.length - 1) {
      target.blur();
      return;
    }

    this.inputs.toArray()[next].nativeElement.focus();

  }

  onKeydown(e: any, i: number) {
    // const prev = i - 1;
    // const target = e.target;
    const isBackspaceKey = (e.key && e.key.toLowerCase() === 'backspace') || (e.keyCode && e.keyCode === 8);

    // if (prev < 0) {
    //   target.blur();
    //   return;
    // }

    if(isBackspaceKey) {
      i > 0 ? this.inputs.toArray()[i-1].nativeElement.focus() : this.inputs.toArray()[0].nativeElement.focus();
      //this.inputs.toArray()[i-1].nativeElement.focus();
    }
  }
  // async keydown(e: any, i: number): Promise<void> {
  //   const target = e.target;
  //   const isTargetEmpty = this.isEmpty(target.value);
  //   const prev = i - 1;
  //
  //   // processing only backspace events
  //   const isBackspaceKey = await this.isBackspaceKey(e);
  //   if (!isBackspaceKey) {
  //     return;
  //   }
  //
  //   e.preventDefault();
  //
  //   this.setInputValue(target, null);
  //   if (!isTargetEmpty) {
  //     this.emitChanges();
  //   }
  //
  //   if (prev < 0) {
  //     return;
  //   }
  //
  //   if (isTargetEmpty) {
  //     this.inputs[prev].focus();
  //   }
  // }
  //
  // isInputElementEmptyAt(index: number): boolean {
  //   const input = this.inputs[index];
  //   if (!input) {
  //     return true;
  //   }
  //
  //   return this.isEmpty(input.value);
  // }
  //
  // private emitChanges(): void {
  //   setTimeout(() => this.emitCode(), 50);
  // }
  //
  // private emitCode(): void {
  //   let code = '';
  //
  //   for (const input of this.inputs) {
  //     if (!this.isEmpty(input.nativeElement.value)) {
  //       code += input.nativeElement.value;
  //     }
  //   }
  //
  //   this.codeChanged.emit(code);
  //
  //   if (code.length >= this.length) {
  //     this.codeCompleted.emit(code);
  //   }
  // }
  //
  // private setInputValue(input: ElementRef, value: any): void {
  //   const isEmpty = this.isEmpty(value);
  //   input.nativeElement.value = isEmpty ? null : value;
  //   input.nativeElement.className = isEmpty ? '' : 'has-value';
  // }

  // private isBackspaceKey(e: any): Promise<boolean> {
  //   const isBackspace = (e.key && e.key.toLowerCase() === 'backspace') || (e.keyCode && e.keyCode === 8);
  //   if (isBackspace) {
  //     return Promise.resolve(true);
  //   }
  //
  //   return new Promise<boolean>((resolve) => {
  //     setTimeout(() => {
  //       const input = e.target;
  //       resolve(input.selectionStart === 0);
  //     });
  //   });
  // }

  private isEmpty(value: any): boolean {
    return value === null || value === undefined || !value.toString().length;
  }

}
