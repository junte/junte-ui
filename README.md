version="$(cat VERSION)" npm run publish

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

