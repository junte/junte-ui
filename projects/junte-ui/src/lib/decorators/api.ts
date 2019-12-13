import 'reflect-metadata';

export const COMPONENT_API_METADATA_KEY = Symbol('component_api_field_meta');

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

export function PropertyApi(data: PropertyMetadata) {
  return function (obj: Object, property: string) {
    const metadata = Reflect.getMetadata(COMPONENT_API_METADATA_KEY, obj) || {};
    metadata[property] = data;
    Reflect.defineMetadata(COMPONENT_API_METADATA_KEY, metadata, obj);
  };
}

export function MethodApi(metadata: PropertyMetadata) {
  return function (obj: Object, property: string) {

  };
}
