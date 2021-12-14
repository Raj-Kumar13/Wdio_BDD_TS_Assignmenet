import Data from "../TestData/Data.json"
import faker from 'faker'
class AdminPage{
 
    get adminButton(){
        return $("//a[@id='menu_admin_viewAdminModule']/b")
    }
    async clickAdminButton(){
        await this.adminButton.click()
    }
    get systemUserUsernameElement(){
        return $("#searchSystemUser_userName")
    }
    get systemUserUserRoleElement(){
        return $("#searchSystemUser_userType")
    }
    get systemUserEmployeeNameElement(){
        return $("//input[@id='searchSystemUser_employeeName_empName']")
    }
    get systemUserStatus(){
        return $("//select[@id='searchSystemUser_status']")
    }

    async enterDetails(){
        await this.systemUserUsernameElement.setValue(Data.searchUser.Username);
        await this.systemUserUserRoleElement.selectByVisibleText(Data.searchUser.UserRole);
        await this.systemUserEmployeeNameElement.setValue(Data.searchUser.EmployeeName);
        await this.systemUserStatus.selectByVisibleText(Data.searchUser.status);

    }
    get searchElement(){
        return $(".searchbutton")
    }

    async clickSearch(){
        await this.searchElement.click();
    }
    get expectedUsernameElement(){
        return $("//td[@class='left'][1]")
    }
    get expectUserRoleElement(){
        return $("//td[@class='left'][2]"); 
    }
    get expectedEmployeeNameElemente(){
        return $("//td[@class='left'][3]")
    }
    get expectedStatusElemente(){
        return $("//td[@class='left'][4]")
    }

    get resetButtonElement(){
        return $("#resetBtn");
    }
    async clickResetButton(){
       await this.resetButtonElement.click();    
    }

    get addButtonElement(){
        return $("#btnAdd")
    }
    async clickAddButton(){
        await this.addButtonElement.click();
    }
    get addUserHeaderElement(){
        return $("#UserHeading")
    }

    get addUserUserRoleElement(){
        return $("#systemUser_userType")
    }
    get addUserEmployeeNameElement(){
        return $("//input[@id='systemUser_employeeName_empName']")
    }
    get addUserUsername(){
        return $("//input[@id='systemUser_userName']")
    }
    get addUserStatus(){
        return $("//select[@id='systemUser_status']")
    }
    get addUserPassword(){
        return $("//input[@id='systemUser_password']")
    }
    get addUserConfirmPassword(){
        return $("//input[@id='systemUser_confirmPassword']")
    }
    get saveButtonElement(){
        return $("#btnSave")
    }

    async addUserDetails(){
        await this.addUserUserRoleElement.click()
        await this.addUserUserRoleElement.selectByVisibleText(Data.addUser.userRole)
        await this.addUserEmployeeNameElement.setValue(Data.addUser.EmployeeName)
        await this.addUserUsername.setValue(faker.internet.userName())
        await this.addUserStatus.click()
        await this.addUserStatus.selectByVisibleText(Data.addUser.Status)
        await this.addUserPassword.setValue(Data.addUser.Password);
        await this.addUserConfirmPassword.setValue(Data.addUser.Password)
    }

    async clickSubmitButton(){
        await this.saveButtonElement.click()
    }

    get successfullySavedMassageElement(){
        return $("should display Successfully Saved");
    }
    get systemUserHeaderElement(){
        return $('//a[@title="Hide Options"]')
    }
}
export default new AdminPage;
