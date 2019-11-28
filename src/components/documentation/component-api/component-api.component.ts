import { Component, ComponentFactoryResolver, Injector, Input } from '@angular/core';
import { PROPERTY_API_METADATA_KEY } from 'junte-ui';
import { PropertyAPI } from 'junte-ui';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent {

  properties: { [key: string]: PropertyAPI } = {};

  @Input()
  set target(target: any) {
    this.properties = {};
    const component = this.cfr.resolveComponentFactory(target)
      .create(this.injector).instance;

    for (const prop of Object.keys(component)) {
      const meta = Reflect.getMetadata(PROPERTY_API_METADATA_KEY, component, prop);
      if (!!meta) {
        this.properties[prop] = meta;
      }
    }
  }

  constructor(private injector: Injector,
              private cfr: ComponentFactoryResolver) {
  }
}
