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
Install angular `ngc` if you have no yet.
```
npm i -g @angular/cli
```

Create a new angular project
```bash
ng new junte-ui-test --style=scss --routing=false
cd junte-ui-test
```

```bash
npm install @junte/ui  --save-dev
```
Import `Junte UI` & `BrowserAnimationsModule` modules into your app module `src/app/app.module.ts`
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
Import styles and assets in `angular.json`
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

Import the styles into the global app styles `src/styles.scss`
```scss
@import "~@junte/ui/lib/assets/styles/jnt-all";
@import "~@junte/ui/lib/assets/styles/jnt-common";
body {
      font-family: $jnt-font-family-base;
      font-weight: $jnt-font-weight-light;
      font-size: $jnt-font-size-normal;
      color: $jnt-primary-text-color;
      margin: 20px;
}
```
Bingo 👏 Start your project.
```bash
ng serve
``` 

It is a very fast but rude installation with importing all components & assets.

## How to try
You can go to research all components specifications https://junte-ui.com/

For fast test add link to `UI` enum in `src/app/app.component.ts`
```typescript
import { Component } from '@angular/core';
import { UI } from '@junte/ui';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    ui = UI; // link to junte UI enum
}
```

Add `jnt-button` in to your `src/app/app.component.html`

```html
<jnt-button text="Click on me"
    [icon]="ui.icons.user">
    <jnt-badge [value]="5"></jnt-badge>
</jnt-button>
```

You should see the button 😎

Problems 🙀? Please, add issue an here 👉 https://gitlab.com/junte/junte-ui/-/issues
