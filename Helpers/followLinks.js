class FollowLinks {
    async getAllLinks() {//get all links from page and then filter
        const allLinks = [];
        browser.driver.executeScript("return [].map.call(document.links, function(e){return e.href})")
            .then(links => links
                .filter(link => !/^javascript/.test(link))
                .forEach(link => {
                    allLinks.push(link);
                })
            );
        return allLinks;
    }
    async sortLinks(links, text){
        const _text = text.toLowerCase();
        return links.filter(function (link) {
            return link.includes(_text);
        });
    }
    async followLinks (links) {
        links.forEach(link => {
            browser.driver.get(link);
        });
    }

    async getLinksByXpath(){
        const Elements = browser.findElements(by.xpath('//h3[@class="LC20lb"]/..'));
        const allLinks = [];
        for (let i = 0; i < Elements.length; i++)
        {
            const link = await Elements[i].getAttribute('href');
            allLinks.push(link);
        }

        return allLinks;

    }
}

module.exports = FollowLinks;