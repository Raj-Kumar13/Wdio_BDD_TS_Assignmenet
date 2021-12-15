import faker from 'faker';

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
    async fillFullName(){
        await this.firstNameElement.setValue(faker.name.firstName());
        await this.middleNameElement.setValue(faker.name.middleName());
        await this.lastNameElement.setValue(faker.name.lastName())
    }
    get photoUploadElemnet(){
        return $("#photofile")
    }
  // async uploadFile(){
  //      await this.photoUploadElemnet.addValue(`D:\CG_VSCode_WDIO\WebDriverIOBDDTs_Assignement\features\TestData`)
  //  }
}
export default new PIMPage