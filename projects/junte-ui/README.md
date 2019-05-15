##Installation
```
$ npm install junte-ui
```

##Usage
```
import { JunteUiModule } from 'junte-ui';
 
@NgModule({
  imports: [ JunteUiModule ]
})
export class AppModule {
}
```

Import style and SVG icon assets file link in ``angular.json``:
```
{
...
"assets": [
      +     {
      +        "glob": "**/*",
      +        "input": "node_modules/junte-ui/lib/assets/fonts/icons/",
      +        "output": "./assets/fonts/icons/"
      +     }
          ],
            "styles": [
      +       "node_modules/junte-ui/lib/assets/styles/icons.scss",
      +       "node_modules/junte-ui/lib/assets/fonts/open-sans/import.scss"
            ]
...
}
```
Import the style files of the components you need into the global style file ``style.scss``:
```
@import "~junte-ui/lib/assets/styles/components/button/button.encapsulated";
@import "~junte-ui/lib/assets/styles/components/block/block.encapsulated";
@import "~junte-ui/lib/assets/styles/components/badge/badge.encapsulated";
...
```
