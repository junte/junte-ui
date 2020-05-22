import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { StackModule } from '../stack/stack.module';
import { CollapsibleComponent } from './collapsible.component';

@NgModule({
    declarations: [
        CollapsibleComponent
    ],
    imports: [
        CommonModule,
        StackModule,
        ButtonModule,
        IconModule
    ],
    exports: [
        CollapsibleComponent
    ]
})
export class CollapsibleModule {
}
