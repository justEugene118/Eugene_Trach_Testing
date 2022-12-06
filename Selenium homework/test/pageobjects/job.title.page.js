const Page = require ('./page');

class JobTitlePage extends Page {
    get pageTitle() { return $('div.oxd-layout-context > div > div > h6') }
    get JobTitle() { return $('form > div:nth-child(1) > div > div:nth-child(2) > input') };
    get JobDescription() { return $('form > div:nth-child(2) > div > div:nth-child(2) > textarea') };
    get JobNote() { return $('form > div:nth-child(4) > div > div:nth-child(2) > textarea') };
    get SubmitButton() { return $('form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space') };

    async fillForm (title, dsc, note) {
        await this.JobTitle.setValue(title);
        await this.JobDescription.setValue(dsc);
        await this.JobNote.setValue(note);
    }

    async submit () {
        await this.SubmitButton.click()
    }
}
module.exports = new JobTitlePage()