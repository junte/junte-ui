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
import { SelectorType } from './enums';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent {

  language = Language;
  selectorType = SelectorType;

  properties: { [key: string]: PropertyMetadata } = {};
  methods: { [key: string]: MethodMetadata } = {};
  content: { [key: string]: ContentMetadata } = {};

  @Input()
  selector: string;

  @Input()
  type = SelectorType.Component;

  @Input()
  set target(target: any) {
    this.properties = Reflect.getMetadata(COMPONENT_API_PROPERTIES_METADATA_KEY, target) || {};
    this.methods = Reflect.getMetadata(COMPONENT_API_METHODS_METADATA_KEY, target) || {};
    this.content = Reflect.getMetadata(COMPONENT_API_CONTENT_METADATA_KEY, target) || {};
  }

}
