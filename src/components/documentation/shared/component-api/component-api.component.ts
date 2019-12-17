import { Component, ComponentFactoryResolver, Injector, Input } from '@angular/core';
import { COMPONENT_API_METADATA_KEY } from 'junte-ui';
import { PropertyMetadata, MethodMetadata } from 'junte-ui';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent {

  properties: { [key: string]: PropertyMetadata | MethodMetadata } = {};

  @Input() title: string;

  @Input()
  set target(target: any) {
    const component = this.cfr.resolveComponentFactory(target)
      .create(this.injector).instance;
    this.properties = Reflect.getMetadata(COMPONENT_API_METADATA_KEY, component) || {};
  }

  constructor(private injector: Injector,
              private cfr: ComponentFactoryResolver) {
  }
}
