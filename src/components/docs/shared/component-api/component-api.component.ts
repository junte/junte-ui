import { Component, ComponentFactoryResolver, Injector, Input } from '@angular/core';
import {
  COMPONENT_API_PROPERTIES_METADATA_KEY,
  COMPONENT_API_METHODS_METADATA_KEY,
  COMPONENT_API_CONTENT_METADATA_KEY,
  PropertyMetadata,
  MethodMetadata,
  ContentMetadata
} from 'junte-ui';
import { Language } from '../code-highlight/enum';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent {

  language = Language;

  properties: { [key: string]: PropertyMetadata } = {};
  methods: { [key: string]: MethodMetadata } = {};
  content: { [key: string]: ContentMetadata } = {};

  @Input() selector: string;

  // TODO: deprecated, use selector instead
  @Input() title: string;

  @Input()
  set target(target: any) {
    const component = this.cfr.resolveComponentFactory(target)
      .create(this.injector).instance;
    this.properties = Reflect.getMetadata(COMPONENT_API_PROPERTIES_METADATA_KEY, component) || {};
    this.methods = Reflect.getMetadata(COMPONENT_API_METHODS_METADATA_KEY, component) || {};
    this.content = Reflect.getMetadata(COMPONENT_API_CONTENT_METADATA_KEY, component) || {};
  }

  constructor(private injector: Injector,
              private cfr: ComponentFactoryResolver) {
  }
}
