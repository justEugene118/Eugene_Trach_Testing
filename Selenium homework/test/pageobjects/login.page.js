const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () { return $('input[name="username"]'); }
    get inputPassword () { return $('input[name="password"]'); }
    get buttonSubmit () { return $('button[type="submit"]'); }

    open () {
        return super.open('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }
}

module.exports = new LoginPage();
