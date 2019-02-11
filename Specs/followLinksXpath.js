const FollowLinks = require('../Helpers/followLinks.js');
const GoogleSearch = require('../Helpers/googleSearch.js');

describe('Twinfield links from Search Results page', function () {
    const google = new GoogleSearch();
    const results = new FollowLinks();

    it('should be opened. 2nd option - get them by Xpath'), function () {
        this.timeout(10000);
        google.goToPage('https://www.google.com');
        google.sendQuery('Twinfield');
        const allLinks = results.getLinksByXpath();
        const sortedLinks = results.sortLinks(allLinks, 'Twinfield');
        results.followLinks(sortedLinks);

    };
});