import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ColComponent } from './col/col.component';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  entryComponents: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  exports: [
    ContainerComponent,
    RowComponent,
    ColComponent
  ]
})
export class GridModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<GridModule> {
    return {
      ngModule: GridModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
