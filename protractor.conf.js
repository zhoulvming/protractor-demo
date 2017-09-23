// var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: true,
    framework: 'jasmine',
    SELENIUM_PROMISE_MANAGER: false,
    specs: ['src/spec.ts'],
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    },

    //html report
    // onPrepare: function(){
    //    jasmine.getEnv().addReporter(
    //        new Jasmine2HtmlReporter({
    //            savePath: 'e2e/',
    //            takeScreenshots: true,
    //            takeScreenshotsOnlyOnFailures: true //take shot only failed
    //        })
    //    );
    // }
};
