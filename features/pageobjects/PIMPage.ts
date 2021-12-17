import faker from 'faker';
const path =require('path');
class PIMPage{

   
    get pimHeaderElement(){
        return $("#menu_pim_viewPimModule")
    }
    get addEmployeeElement(){
        return $("#menu_pim_addEmployee")
    }
    async clickOnPIMButton(){
        await this.pimHeaderElement.click()
    }
    async ClickAddEmployeeElement(){
        await this.addEmployeeElement.click()
    }
    get firstNameElement(){
        return $("#firstName")
    }
    get middleNameElement(){
        return $("#middleName")
    }
    get lastNameElement(){
        return $("#lastName")
    }
    async fillFullName(firstName,middleName,lastName){
        await this.firstNameElement.setValue(firstName );
        await this.middleNameElement.setValue(middleName );
        await this.lastNameElement.setValue(lastName )
    }
    get photoUploadElemnet(){
        return $("#photofile")
    }
  async uploadFile(){
        const filePath = path.join(__dirname,"../TestData/demo.jpg")    
        const remoteFilePath = await browser.uploadFile(filePath)
        await this.photoUploadElemnet.setValue(remoteFilePath);
        
    }
    get checkBoxElement(){
        return $('//input[@name="chkLogin"]')
    }
    async clickCheckBox(){
        await this.checkBoxElement.click()
    }
    get userNameElement(){
        return $("//input[@name='user_name']")
    }
    get userPasswordElement(){
        return $("//input[@name='user_password']")
    }
    get confirmPasswordElement(){
        return $("//input[@name='re_password']")
    }
    get statusDropDownElemnet(){
        return $("//select[@name='status']")
    }

    async fillCreateLoginDetails(userName,password,key,value){
        await this.userNameElement.setValue(userName)
        await this.userPasswordElement.setValue(password)
        await this.confirmPasswordElement.setValue(password)
        await this.statusDropDownElemnet.selectByAttribute(key,value)
    }
    get saveBottonElement(){
        return $("#btnSave")
    }
    async  clickSaveButton(){
        await this.saveBottonElement.scrollIntoView()
        await this.saveBottonElement.click();
        
    }

    get personDetailsHeaderElement(){
        return $("//h1[text()='Personal Details']")
    }

}
export default new PIMPage