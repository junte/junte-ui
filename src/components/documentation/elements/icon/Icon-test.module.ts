import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JunteUiModule, GridModule } from 'junte-ui';
import { SharedModule } from 'src/components/documentation/shared/shared.module';
import { IconTestComponent } from './icon-test.component';
import { IconsListComponent, GetIconsPipe, GetGroupsPipe, GetPathPipe } from './select-icon/icons-list/icons-list.component';
import { SelectIconComponent } from './select-icon/select-icon.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    GridModule,
    SharedModule
  ],
  exports: [IconTestComponent],
  entryComponents: [SelectIconComponent],
  declarations: [
    IconTestComponent,
    SelectIconComponent,
    IconsListComponent,
    GetIconsPipe,
    GetGroupsPipe,
    GetPathPipe
  ],
})
export class IconTestModule {
}

