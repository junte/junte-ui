import { Component, ComponentFactoryResolver, Injector, Input } from '@angular/core';
import {
  COMPONENT_API_PROPERTIES_METADATA_KEY, COMPONENT_API_METHODS_METADATA_KEY,
  PropertyMetadata, MethodMetadata
} from 'junte-ui';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent {

  properties: { [key: string]: PropertyMetadata } = {};
  methods: { [key: string]: MethodMetadata } = {};

  @Input() selector: string;

  // TODO: deprecated, use selector instead
  @Input() title: string;

  @Input()
  set target(target: any) {
    const component = this.cfr.resolveComponentFactory(target)
      .create(this.injector).instance;
    this.properties = Reflect.getMetadata(COMPONENT_API_PROPERTIES_METADATA_KEY, component) || {};
    this.methods = Reflect.getMetadata(COMPONENT_API_METHODS_METADATA_KEY, component) || {};
  }

  constructor(private injector: Injector,
              private cfr: ComponentFactoryResolver) {
  }
}
