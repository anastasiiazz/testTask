exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './Specs/firstLinkSpec.js',
        './Specs/followLinksSpec.js',
        './Specs/followLinksXpath.js'
    ],
    //getPageTimeout: 5000,
    restartBrowserBetweenTests: true
    //useAllAngular2AppRoots: true
}