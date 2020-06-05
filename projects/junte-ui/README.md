![pipleline](https://gitlab.com/junte/junte-ui/badges/master/pipeline.svg)
# Quality Angular UI components kit
Rich & fully native components collection for your beautiful 🤩 angular apps! 

See more demos here 👉 https://junte-ui.com/

## Killer features
* 60 native components - no third parties
* separated styles from components with themes support
* building your own iconsets
* SASS mixins API for customizing components in the context
* useful builders for each component with code generation
* mobile components adaptation from box

## How to install
In your angular app
```bash
npm install @junte/ui
```
Then add Junte UI module into your app module
```typescript
import { JunteUiModule } from '@junte/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
      JunteUiModule.forRoot(), 
      BrowserAnimationsModule
    ]
})
export class AppModule { }
```
Import styles and icons assets in `angular.json`
```json
{
  "options": {
    "assets": [
      {
        "glob": "**/*",
        "input": "node_modules/@junte/ui/lib/assets/fonts/junte-ui-icons-default/",
        "output": "./assets/fonts/icons/"
      },
      {
        "glob": "**/*",
        "input": "node_modules/@junte/ui/lib/assets/icons/animated/",
        "output": "./assets/icons/animated/"
      },
      {
        "glob": "**/*",
        "input": "node_modules/@junte/ui/lib/assets/icons/svg/",
        "output": "./assets/icons/svg/"
      }
    ],
    "styles": [
      "src/styles.scss",
      "node_modules/@junte/ui/lib/assets/fonts/junte-ui-icons-default/junte-ui-icons-default-font.scss",
      "node_modules/@junte/ui/lib/assets/fonts/open-sans/regular-400.scss"
    ]
  }
}
```

Import the styles into the global app style `src/styles.scss`
```scss
@import "~@junte/ui/lib/assets/styles/jnt-all";
@import "~@junte/ui/lib/assets/styles/jnt-common";
body {
      font-family: "Open Sans", Tahoma;
      font-weight: $jnt-font-weight-light;
      font-size: $jnt-font-size;
      color: $jnt-primary-text-color;
}
```
Done! It is a very fast but rude installation with importing all components & assets.

## How to try
You can go to research all components specifications https://junte-ui.com/

For fast test add link to `UI` enum in `app.component.ts`
```typescript
import { Component } from '@angular/core';
import { UI } from '@junte/ui';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    ui = UI; // link to junte UI enum
}
```

Add `button` in your `app.template.html`

```html
<jnt-button text="Click on me"
    [icon]="ui.icons.user">
    <jnt-badge [value]="5"></jnt-badge>
</jnt-button>
```

You should see the button 😎

Problems 🙀? Please, add issue here 👉 https://gitlab.com/junte/junte-ui/-/issues
