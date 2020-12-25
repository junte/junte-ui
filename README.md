# Junte UI test application

The project contains sources for `Junte UI` & test app.

See demo here 👉 https://junte-ui.com/

For using `Junte UI` in your apps please check https://www.npmjs.com/package/@junte/ui

## For development

```
npm i
cd ./projects/junte-ui
npm i
cd -
npm run iconfont
npm start
```

Open in browser http://localhost:4200/


node-sass ./projects/junte-ui/src/lib/assets/styles/forms/button/_button.scss --include-path=./projects/junte-ui/src/lib/assets/styles
node-sass ./src/assets/themes/light.scss --include-path=./projects/junte-ui/src/lib/assets/styles

node-sass ./projects/junte-ui/src/lib/forms/button/button.test.scss --include-path=./projects/junte-ui/src/lib/assets/styles/ > test.css

### Gitlab

#### Publish:
```
cd projects/junte-ui
npm config set @junte:registry https://gitlab.com/api/v4/projects/9560752/packages/npm/
npm config set '//gitlab.com/api/v4/projects/9560752/packages/npm/:_authToken' "xxx"
npm run publish:version
```
Where `xxx`: 
- personal access token 
  - https://gitlab.com/-/profile/personal_access_tokens
  - Create new token with `read_registry` and `write_registry` scopes
  - Save this token to own computer and use this token
- deploy token
 
#### Install:

##### From Gitlab:
- Add this commands to project package.json:
```
"junte:set": "npm config set @junte:registry https://gitlab.com/api/v4/projects/804650/packages/npm",
"junte:install": "npm install https://gitlab.com/api/v4/projects/9560752/packages/npm/@junte/ui/-/@junte/ui-xxx.tgz --save",
"junte": "npm run junte:set && npm run junte:install"
```
Where `xxx` - current library version (https://gitlab.com/junte/junte-ui/-/packages)

- Run `npm run junte` in the terminal

##### From local package:
In library:
- `cd projects/junte-ui`
- `npm run pack:version`

In project:
- Use `"@junte/ui": "file:../../junte-ui/junte-ui/dist/junte-ui/junte-ui-xxx.tgz",`
    - Where `xxx` - current library version (file `VERSION` in `junte-ui/projects/junte-ui`)
- Don't forget replace `"@junte/ui": "file:../../junte-ui/junte-ui/dist/junte-ui/junte-ui-xxx.tgz",` to real package

#### Remove Gitlab registry for publish to npm:
- `cd projects/junte-ui`
- `npm config rm @junte:registry`
- `npm run publish:version`

#### Info about current publish registry:
- `cd projects/junte-ui`
- `npm config list`

@include jnt-button();
[jnt-button-host] [data-icon][jnt-icon-host][child-of=jnt-button-host] {

}

<div _ng-host-xxx data-blue-div data-blue>
  <jnt-button data-blue-button _ng-host-xxx host="jnt-button-host" [scheme]="ui.scheme.secondary">
    <jnt-icon data-icon host="jnt-icon-host" child-of="jnt-button-host"></jnt-icon>
  </jnt-button>
</div>

$jnt-ng-deep: true;
[data-blue-button] {
  @include jnt-button((color: blue), '&');
}

[data-blue][scheme='secondary'] ::ng-deep [data-icon][jnt-icon-host][child-of=jnt-button-host] {

}

$jnt-ng-deep: true;
[data-blue-div] {
@include jnt-button((color: blue));
}

[data-blue-div] [jnt-button-host][scheme='secondary'] ::ng-deep [data-icon][jnt-icon-host][child-of=jnt-button-host] {

}
