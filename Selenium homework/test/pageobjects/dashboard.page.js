const Page = require ('./page');

class DashboardPage extends Page{
    get admin_href() { return $('a[href="/web/index.php/admin/viewAdminModule"]') }
    get header() { return $('.oxd-topbar-header-breadcrumb-module') }

    async goToAdmin () {
        await this.admin_href.click();
    }
}
module.exports = new DashboardPage();
