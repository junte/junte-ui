import { environment } from '../environments/environment';

const LOAD_DELAY = environment.production ? 0 : 3000;

export function loadChildren(loader: Promise<any>): any {
  document.body.setAttribute('data-busy', '1');
  return loader.finally(() => setTimeout(() =>
    document.body.removeAttribute('data-busy'), LOAD_DELAY));
}
