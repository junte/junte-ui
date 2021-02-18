import { CommonModule } from '@angular/common';
import { Directive, HostListener, Input, NgModule } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Key, Modifier } from '../../core/enums/keyboard';

interface Shortcut {
  key: Key;
  modifier: Modifier;
  action: Function;
}

@Directive({
  selector: '[jntShortcuts]'
})
export class ShortcutsDirective {

  @PropertyApi({
    description: 'Shortcuts array',
    type: '[{key: ui.kayboard.key, modifier: ui.keyboard.modifier, action: Function}]',
    default: '[]'
  })
  @Input('jntShortcuts')
  shortcuts: Shortcut[] = [];

  @HostListener('keydown', ['$event'])
  select(event: KeyboardEvent) {
    const found = this.shortcuts.find(shortcut => shortcut.key === event.key);
    if (!!found && (!found.modifier || (found.modifier === Modifier.altKey && event.altKey)
      || (found.modifier === Modifier.ctrlKey && event.ctrlKey)
      || (found.modifier === Modifier.shiftKey && event.shiftKey)
      || (found.modifier === Modifier.metaKey && event.metaKey))) {
      found.action();
      event.preventDefault();
    }
  }
}

@NgModule({
  declarations: [
    ShortcutsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortcutsDirective
  ]
})
export class ShortcutsModule {
}
