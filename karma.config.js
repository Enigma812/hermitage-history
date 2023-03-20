const { join } = require('path');

module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular'
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
      require('karma-spec-reporter')
    ],
    client: {
      clearContext: false,
      jasmine: {
        random: true
      }
    },
    junitReporter: {
      outputDir: join(__dirname, 'junit-report/hermitage-history')
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: true,
      failFast: false
    },
    coverageReporter: {
      dir: join(__dirname, 'coverage/hermitage-history'),
      subdir: '.',
      reporters: [
        {
          type: 'html'
        },
        {
          type: 'lcovonly'
        },
        {
          type: 'text-summary'
        },
        {
          type: 'cobertura'
        }
      ],
      check: {
        global: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0
        },
        each: {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0
        }
      }
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: 'INFO',
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    browserDisconnectTimeout: 30000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 30000,
    customLaunchers: {
      ChromiumHeadlessNoSandbox: {
        base: 'ChromiumHeadless',
        flags: [
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222'
        ]
      },
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
          '--headless'
        ]
      }
    },
    singleRun: false,
    files: [],
    proxies: []
  });
};
