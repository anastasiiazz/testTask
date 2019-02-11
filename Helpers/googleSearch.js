const assert = require('chai').assert;
const expect = require('chai').expect;
browser.waitForAngularEnabled(false);

class GoogleSearch {

    async goToPage(URL){
        browser.waitForAngularEnabled(false);
        browser.driver.get(URL);
    }
    async sendQuery(query){
        this.searchField = element(by.name('q')).sendKeys(query);
        browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
    }
    async checkFirstResult(expectedLink) {
        var textPromise = element(by.css('cite')).getText();
        textPromise.then((text) => {
            var link = text.split(' ')[0]; //to avoid links like https://www.wolterskluwer.co.uk > Software
            try {
                expect(link).to.equal(expectedLink);
            } catch (e) {
                console.log('The first link is ' + text);
                throw e;
            }
        });
    }

}

module.exports = GoogleSearch;