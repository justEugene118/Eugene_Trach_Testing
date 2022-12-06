const Page = require ('./page');

class AdminPage extends Page {
    get headerModule() { return $('.oxd-topbar-header-breadcrumb-module') }
    get pageTitle() { return $('div.orangehrm-header-container > h6') }
    get jobButton() { return $('div.oxd-topbar-body > nav > ul > li:nth-child(2)') }
    get jobTitleButton() { return $('div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a') }
    get addButton() { return $('div.orangehrm-header-container > div > button') }

    async openMenu () {
        await this.jobButton.click();
    }

    async JobTitleClick() {
        await this.jobTitleButton.click();
    }

    async goToCreationPage () {
        await this.addButton.click()
    }

    async deleteTitle () {
        await browser.fullscreenWindow();
        let deleteButton = await $('div.orangehrm-container > div > div.oxd-table-body > div:nth-last-child(1) > div > div:nth-child(4) > div > button:nth-child(1)')
        await deleteButton.click();

        let confirmButton = await $('button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin');
        await confirmButton.click();
    }

}
module.exports = new AdminPage()