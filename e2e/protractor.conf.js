// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../projects/junte-ui/src/**/*.e2e.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1600x1000']
  }
},
  directConnect: true,
  baseUrl: 'http://localhost:3000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: false,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    browser.waitForAngularEnabled(false);
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
