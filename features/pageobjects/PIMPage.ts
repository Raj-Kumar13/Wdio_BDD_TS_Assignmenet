import { uploadFileDetails } from './../Utils/FileUploadCommands';

import {addLogs} from '../Utils/Commands'

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
        addLogs(`Click PIM Button ${await this.pimHeaderElement.selector}`)
    }
    async ClickAddEmployeeElement(){
        await this.addEmployeeElement.click()
        addLogs(`Click Add Employee Button ${await this.addEmployeeElement.selector}`)
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
    async fillFullName(name:{firstName,middleName,lastName}){
        await this.firstNameElement.setValue(name.firstName() );
        addLogs(`Entered First Name value : ${name.firstName()}`)
        await this.middleNameElement.setValue(name.middleName() );
        addLogs(`Entered middle Name value : ${name.middleName()}`)
        await this.lastNameElement.setValue(name.lastName() )
        addLogs(`Entered Last Name value : ${name.lastName()}`)
    }
    get photoUploadElemnet(){
        return $("#photofile")
    }
  async uploadFile(fileDirectoryPath : string){
        //console.log("-------------------------------------------------------------------"+path)
       // const filePath = path.join(__dirname,"../TestData/demo.jpg")    
       // const remoteFilePath = await browser.uploadFile(filePath)
        // addLogs(`File to be Uploaded value : ${remoteFilePath}`)
        await this.photoUploadElemnet.setValue(await uploadFileDetails(fileDirectoryPath));
       
       addLogs(`File to be Uploaded value : ${await uploadFileDetails(fileDirectoryPath)}`)
        
    }
    get checkBoxElement(){
        return $('//input[@name="chkLogin"]')
    }
    async clickCheckBox(){
        await this.checkBoxElement.click()
        addLogs(`Clicked CheckBox Button element value : ${await this.checkBoxElement.selector}`)
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

    async fillCreateLoginDetails(userName,password,createLoginDetails:{key,value}){
        await this.userNameElement.setValue(userName)
        addLogs(`Entered User Name value : ${userName}`)
        await this.userPasswordElement.setValue(password)
        addLogs(`Entered Password value value : ${password}`)
        await this.confirmPasswordElement.setValue(password)
        addLogs(`Entered Confirm Password value : ${password}`)
        await this.statusDropDownElemnet.selectByAttribute(createLoginDetails.key,createLoginDetails.value)
        addLogs(`Select DropDown value : ${createLoginDetails.value}`)
    }
    get saveBottonElement(){
        return $("#btnSave")
    }
    async  clickSaveButton(){
        await this.saveBottonElement.scrollIntoView()
        await this.saveBottonElement.click();
        addLogs(`Click save Button element value : ${await this.saveBottonElement.selector}`)
        
    }

    get personDetailsHeaderElement(){
        return $("//h1[text()='Personal Details']")
    }

}
export default new PIMPage();