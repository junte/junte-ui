import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

enum InputState {
  ready = 0,
  reset = 1
}

@Component({
  selector: 'jnt-code',
  templateUrl: './code.encapsulated.html'
})
export class CodeComponent {

  ui = UI;
  inputs: HTMLInputElement[] = [];
  private _inputsCount: number;
  inputsSlots: number[];

  @PropertyApi({
    description: 'Count of inputs',
    type: 'int',
    default: 4,
  })
  @Input()
  set inputsCount(inputsCount: number) {
    this._inputsCount = inputsCount;
    this.updateInputs();
  }


  get inputsCount() {
    return this._inputsCount;
  }

  updateInputs() {
    const inputsSlots: number[] = [];

    for (let i = 0; i < this.inputsCount; i++) {
      inputsSlots.push(i);
    }
    this.inputsSlots = inputsSlots;
  }
  @Input() codeLength = 4;
  @Input() readonly code?: string | number;
  @ViewChildren('input') inputsList: QueryList<ElementRef>;
  @Output() codeChanged = new EventEmitter<string>();
  @Output() codeCompleted = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this.inputsList.forEach((item) => {
      this.inputs.push(item.nativeElement);
    });

    // the @Input code might have value. Checking
    this.onInputCodeChanges();
  }
  private onInputCodeChanges(): void {
    if (!this.inputs.length) {
      return;
    }

    if (this.isEmpty(this.code)) {
      this.inputs.forEach((input: HTMLInputElement) => {
        this.setInputValue(input, null);
      });
      return;
    }

    const chars = this.code.toString().trim().split('');


    this.inputs.forEach((input: HTMLInputElement, index: number) => {
      this.setInputValue(input, chars[index]);
    });
  }

  onInput(e: any, i: number): void {
    const next = i + 1;
    const target = e.target;
    const value = e.data || target.value;

    if (this.isEmpty(value)) {
      return;
    }


    this.setInputValue(target, value.toString().charAt(0));
    this.emitChanges();

    if (next > this.codeLength - 1) {
      target.blur();
      return;
    }

    this.inputs[next].focus();
  }

  async keydown(e: any, i: number): Promise<void> {
    const target = e.target;
    const isTargetEmpty = this.isEmpty(target.value);
    const prev = i - 1;

    // processing only backspace events
    const isBackspaceKey = await this.isBackspaceKey(e);
    if (!isBackspaceKey) {
      return;
    }

    e.preventDefault();

    this.setInputValue(target, null);
    if (!isTargetEmpty) {
      this.emitChanges();
    }

    if (prev < 0) {
      return;
    }

    if (isTargetEmpty ) {
      this.inputs[prev].focus();
    }
  }


  isInputElementEmptyAt(index: number): boolean {
    const input = this.inputs[index];
    if (!input) {
      return true;
    }

    return this.isEmpty(input.value);
  }

  private emitChanges(): void {
    setTimeout(() => this.emitCode(), 50);
  }

  private emitCode(): void {
    let code = '';

    for (const input of this.inputs) {
      if (!this.isEmpty(input.value)) {
        code += input.value;
      }
    }

    this.codeChanged.emit(code);

    if (code.length >= this.codeLength) {
      this.codeCompleted.emit(code);
    }
  }

  private setInputValue(input: HTMLInputElement, value: any): void {
    const isEmpty = this.isEmpty(value);
    input.value = isEmpty ? null : value;
    input.className = isEmpty ? '' : 'has-value';
  }

  private isBackspaceKey(e: any): Promise<boolean> {
    const isBackspace = (e.key && e.key.toLowerCase() === 'backspace') || (e.keyCode && e.keyCode === 8);
    if (isBackspace) {
      return Promise.resolve(true);
    }

    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const input = e.target;
        resolve(input.selectionStart === 0);
      });
    });
  }

  private isEmpty(value: any): boolean {
    return  value === null || value === undefined || !value.toString().length;
  }

}
