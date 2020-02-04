import 'reflect-metadata';

export const COMPONENT_API_PROPERTIES_METADATA_KEY = Symbol('component_api_properties_field_meta');
export const COMPONENT_API_METHODS_METADATA_KEY = Symbol('component_api_methods_field_meta');
export const COMPONENT_API_CONTENT_METADATA_KEY = Symbol('component_api_content_field_meta');

export class PropertyMetadata {
  description: string;
  path?: string;
  type?: string;
  options?: string[];
  default?: string;
}

export class MethodMetadata {
  description: string;
}

export class ContentMetadata {
  selector: string;
  description: string;
}

export function PropertyApi(data: PropertyMetadata) {
  return function (obj: Object, property: string) {
    const metadata = Reflect.getMetadata(COMPONENT_API_PROPERTIES_METADATA_KEY, obj) || {};
    metadata[property] = data;
    Reflect.defineMetadata(COMPONENT_API_PROPERTIES_METADATA_KEY, metadata, obj);
  };
}

export function MethodApi(data: MethodMetadata) {
  return function (obj: Object, property: string) {
    const metadata = Reflect.getMetadata(COMPONENT_API_METHODS_METADATA_KEY, obj) || {};
    metadata[property] = data;
    Reflect.defineMetadata(COMPONENT_API_METHODS_METADATA_KEY, metadata, obj);
  };
}

export function ContentApi(data: ContentMetadata) {
  return function (obj: Object, property: string) {
    const metadata = Reflect.getMetadata(COMPONENT_API_CONTENT_METADATA_KEY, obj) || {};
    metadata[property] = data;
    Reflect.defineMetadata(COMPONENT_API_CONTENT_METADATA_KEY, metadata, obj);
  };
}
