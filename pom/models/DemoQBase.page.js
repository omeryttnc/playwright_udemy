
class DemoQABasePage {
    constructor(page) {
        this.page = page;
    }

    /**
     * 
     * @param {string} path 
     */
    async navigate(path) {
        await this.page.goto(`https://demoqa.com/${path}`)
    }
}

module.exports = DemoQABasePage;