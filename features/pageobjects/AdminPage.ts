
import { addLogs } from "../Utils/Commands"
class AdminPage {

    get adminButton() {
        return $("#menu_admin_viewAdminModule")
    }
    async clickAdminButton() {
        await this.adminButton.click()
        addLogs(`Clicked on Admin button Element value : ${await this.adminButton.selector}`)
    }
    get systemUserUsernameElement() {
        return $("#searchSystemUser_userName")
    }
    get systemUserUserRoleElement() {
        return $("#searchSystemUser_userType")
    }
    get systemUserEmployeeNameElement() {
        return $("#searchSystemUser_employeeName_empName")
    }
    get systemUserStatus() {
        return $("#searchSystemUser_status")
    }

    async enterDetails(searchUser: { Username: string, UserRole: string, EmployeeName: string, status: string }) {
        await this.systemUserUsernameElement.setValue(searchUser.Username);
        addLogs(`Entered User name value : ${searchUser.Username}`)
        await this.systemUserUserRoleElement.selectByVisibleText(searchUser.UserRole);
        addLogs(`Selected User Role Dropdown value : ${searchUser.UserRole}`)
        await this.systemUserEmployeeNameElement.setValue(searchUser.EmployeeName);
        addLogs(`Entered Employee name value : ${searchUser.EmployeeName}`)
        await this.systemUserStatus.selectByVisibleText(searchUser.status);
        addLogs(`selected Status Dropdown value : ${searchUser.status}`)

    }
    get searchElement() {
        return $(".searchbutton")
    }

    async clickSearch() {
        await this.searchElement.click();
        addLogs(`Clicked on Search button element value : ${await this.searchElement.selector}`)
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
        addLogs(`Clicked on Reset button element value : ${await this.resetButtonElement.selector}`)
    }

    get addButtonElement() {
        return $("#btnAdd")
    }
    async clickAddButton() {
        await this.addButtonElement.click();
        addLogs(`Clicked on ADD button element value : ${await this.addButtonElement.selector}`)
    }
    get addUserHeaderElement() {
        return $("#UserHeading")
    }

    get addUserUserRoleElement() {
        return $("#systemUser_userType")
    }
    get addUserEmployeeNameElement() {
        return $("#systemUser_employeeName_empName")
    }
    get addUserUsername() {
        return $("#systemUser_userName")
    }
    get addUserStatus() {
        return $("#systemUser_status")
    }
    get addUserPassword() {
        return $("#systemUser_password")
    }
    get addUserConfirmPassword() {
        return $("#systemUser_confirmPassword")
    }
    get saveButtonElement() {
        return $("#btnSave")
    }

    async addUserDetails(addUser: { userRole: string, EmployeeName: string, Status: string, Password: any }, userName: string) {
        await this.addUserUserRoleElement.click()
        addLogs(`Clicked Add Button ${await this.addUserUserRoleElement.selector}`)
        await this.addUserUserRoleElement.selectByVisibleText(addUser.userRole)
        addLogs(`select Dropdown by options dispalyed : ${addUser.userRole}`)
        await this.addUserEmployeeNameElement.setValue(addUser.EmployeeName)
        addLogs(`Entered Employee Name value : ${addUser.EmployeeName}`)
        await this.addUserUsername.setValue(userName)
        addLogs(`Entered User Name value : ${userName}`)
        await this.addUserStatus.selectByVisibleText(addUser.Status)
        addLogs(`seleted user status value : ${addUser.Status}`)
        await this.addUserPassword.setValue(addUser.Password);
        addLogs(`Entered password value : ${addUser.Password}`)
        await this.addUserConfirmPassword.setValue(addUser.Password)
        addLogs(`Entered confirm Password value : ${addUser.Password}`)
    }

    async clickSubmitButton() {
        await this.saveButtonElement.click()
    }

    get successfullySavedMassageElement() {
        return $("//div[contains(text(),'Successfully Saved') and @class='message success fadable']")
    }
    get systemUserHeaderElement() {
        return $('//a[@title="Hide Options"]')
    }
}
export default new AdminPage;
