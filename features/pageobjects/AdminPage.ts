import Data from "../TestData/Data.json"
import faker from 'faker'
class AdminPage {

    get adminButton() {
        return $("//a[@id='menu_admin_viewAdminModule']/b")
    }
    async clickAdminButton() {
        await this.adminButton.click()
    }
    get systemUserUsernameElement() {
        return $("#searchSystemUser_userName")
    }
    get systemUserUserRoleElement() {
        return $("#searchSystemUser_userType")
    }
    get systemUserEmployeeNameElement() {
        return $("//input[@id='searchSystemUser_employeeName_empName']")
    }
    get systemUserStatus() {
        return $("//select[@id='searchSystemUser_status']")
    }

    async enterDetails(userName,userRole,employeeName,status) {
        await this.systemUserUsernameElement.setValue(userName );
        await this.systemUserUserRoleElement.selectByVisibleText(userRole );
        await this.systemUserEmployeeNameElement.setValue(employeeName );
        await this.systemUserStatus.selectByVisibleText(status );

    }
    get searchElement() {
        return $(".searchbutton")
    }

    async clickSearch() {
        await this.searchElement.click();
    }
    get expectedUsernameElement() {
        return $("//td[@class='left'][1]")
    }
    get expectUserRoleElement() {
        return $("//td[@class='left'][2]");
    }
    get expectedEmployeeNameElemente() {
        return $("//td[@class='left'][3]")
    }
    get expectedStatusElemente() {
        return $("//td[@class='left'][4]")
    }

    get resetButtonElement() {
        return $("#resetBtn");
    }
    async clickResetButton() {
        await this.resetButtonElement.click();
    }

    get addButtonElement() {
        return $("#btnAdd")
    }
    async clickAddButton() {
        await this.addButtonElement.click();
    }
    get addUserHeaderElement() {
        return $("#UserHeading")
    }

    get addUserUserRoleElement() {
        return $("#systemUser_userType")
    }
    get addUserEmployeeNameElement() {
        return $("//input[@id='systemUser_employeeName_empName']")
    }
    get addUserUsername() {
        return $("//input[@id='systemUser_userName']")
    }
    get addUserStatus() {
        return $("//select[@id='systemUser_status']")
    }
    get addUserPassword() {
        return $("//input[@id='systemUser_password']")
    }
    get addUserConfirmPassword() {
        return $("//input[@id='systemUser_confirmPassword']")
    }
    get saveButtonElement() {
        return $("#btnSave")
    }

    async addUserDetails(userRole,employeeName,userName,status,password) {
        await this.addUserUserRoleElement.click()
        await this.addUserUserRoleElement.selectByVisibleText(userRole )
        await this.addUserEmployeeNameElement.setValue(employeeName )
        await this.addUserUsername.setValue(userName )
        await this.addUserStatus.click()
        await this.addUserStatus.selectByVisibleText(status )
        await this.addUserPassword.setValue(password );
        await this.addUserConfirmPassword.setValue(password )
    }

    async clickSubmitButton() {
        await this.saveButtonElement.click()
    }

    get successfullySavedMassageElement() {
        return $("//div[@class='message success fadable']");
    }
    get systemUserHeaderElement() {
        return $('//a[@title="Hide Options"]')
    }
}
export default new AdminPage;
