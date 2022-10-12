const DemoQABasePage = require("./DemoQBase.page");

class DemoQHomePage extends DemoQABasePage {
    constructor(page) {
        super(page);
        this.tab_elements = '(//div[@class="card-up"])[1]';
        this.tab_forms = '(//div[@class="card-up"])[2]';
        this.tab_alert = '(//div[@class="card-up"])[3]';
        this.tab_widget = '(//div[@class="card-up"])[4]';
        this.tab_interactions = '(//div[@class="card-up"])[5]';
        this.tab_book_store = '(//div[@class="card-up"])[6]';
    }

}
module.exports = DemoQABasePage;