import 'reflect-metadata';

export const PROPERTY_API_METADATA_KEY = Symbol('property_api_field_meta');

export class PropertyAPI {
  description: string;
  path?: string;
  type?: string;
  options?: string[];
  default?: string;
}

export function api(metadata: PropertyAPI) {
  return function (obj: Object, property: string) {
    Reflect.defineMetadata(PROPERTY_API_METADATA_KEY, metadata, obj, property);
  };
}
