const GoogleSearch = require('../Helpers/googleSearch.js');

describe('Search Twinfield in Google', function() {
    const google = new GoogleSearch();
    it('should return https://www.twinfield.co.uk as first result', function() {
        this.timeout(10000);
        google.goToPage('https://www.google.com');
        google.sendQuery('Twinfield');
        google.checkFirstResult('https://www.twinfield.co.uk'); //pass expected link to function

    });
});