const { LoginPage } = require("./LoginPage");

class AllPages {
    
    constructor(page) {
        this.page=page; 
     
        this.loginPage = new LoginPage(page);
    }


    getLoginPage() {
        return this.loginPage;
    }
}

module.exports = { AllPages };