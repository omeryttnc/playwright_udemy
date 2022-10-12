const { expect } = require("chai");
const DemoQABasePage = require("./DemoQBase.page");

class DemoQABookPage extends DemoQABasePage {
    constructor(page) {
        super(page);
        this.searchBox = '#searchBox';
        this.loginBtn = '#login';
        this.booksName = '.mr-2';
    }
    async navigate() {
        await super.navigate('books');
    }

    async searchBook(bookName) {
        let search = await this.page.$(this.searchBox);
        search.type(bookName);
    }

    async assertionBook(bookName) {

        let booksName = await this.page.$(this.booksName);
        expect(await booksName.innerText()).equal(bookName);
    }

}

module.exports = DemoQABookPage;