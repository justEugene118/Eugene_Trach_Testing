const LoginPage = require ('../pageobjects/login.page.js');
const DashboardPage = require ('../pageobjects/dashboard.page.js');
const AdminPage = require ('../pageobjects/admin.page.js');
const JobTitlePage = require ('../pageobjects/job.title.page');


describe('OrangeHRM Test', () => {
    it('URL opened, title verified', async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php');
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    });

    it('Authentication successfully, on Dashboard page', async () => {
        await LoginPage.login('Admin', 'admin123');
        await expect(DashboardPage.header).toHaveText('Dashboard')
    });

    it('Going to admin page', async () => {
        await DashboardPage.goToAdmin();
        await expect(AdminPage.headerModule).toHaveText('Admin')
    });

    it('Go to Job Title section', async () => {
        await AdminPage.openMenu();
        await AdminPage.JobTitleClick();
        await expect(AdminPage.pageTitle).toHaveText('Job Titles')
    });

    it('add: check if test title exist', async () => {
        await browser.fullscreenWindow();
        const title = $('div.orangehrm-container > div > div.oxd-table-body > div:nth-last-child(1) > div > div:nth-child(2) > div');

        await expect(title !== '___000')
    });

    it('Going to Title creation page', async () => {
        await AdminPage.goToCreationPage();
        await expect(JobTitlePage.pageTitle).toHaveText('Add Job Title')
    });

    it('Filling and saving onn Job Title page', async () => {
        const title = '___000';
        const description = 'Some description';
        const note = 'And some notes';

        await JobTitlePage.fillForm(title, description, note);
        await JobTitlePage.submit();

        await expect(AdminPage.pageTitle).toHaveText('Job Titles')
    });

    it('Verify Job Title creation', async () => {
        const title = $('div.orangehrm-container > div > div.oxd-table-body > div:nth-last-child(1) > div > div:nth-child(2) > div');

        await expect(title === '___000')
    });

    it('Deleting created title', async () => {
        await AdminPage.deleteTitle();

        const title = $('div.orangehrm-container > div > div.oxd-table-body > div:nth-last-child(1) > div > div:nth-child(2) > div');
        await expect(title !== '___000')
    });

});