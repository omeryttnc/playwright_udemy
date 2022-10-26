class LoginPage {

    constructor(page) {
        this.page = page;
        this.signInButton = page.locator("[value='Login']");
        this.userrName = page.locator("#userEmail");
        this.userPassword = page.locator("#userPassword");


    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }


    async validLogin(username, password) {
        await this.userrName.type(username);
        await this.userPassword.type(password);
        await this.signInButton.click();
    }


}

module.exports = { LoginPage };