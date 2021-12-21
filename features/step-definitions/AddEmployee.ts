import { Given, Then, When } from '@cucumber/cucumber'
import faker from 'faker'
import PIMPage from '../pageobjects/PIMPage'
import Data from '../TestData/Data.json'
When("Click on PIM button", async () => {
    await PIMPage.clickOnPIMButton()

})
When("Click on Add Employee button", async () => {
    await PIMPage.ClickAddEmployeeElement()
})
Then("Should be landing on {string} page", async (urlElemente) => {
    await expect(browser).toHaveUrlContaining(urlElemente)
})
When("fill the Required details like FirstName,MiddleName,LastName,Photograph", async () => {
    await PIMPage.fillFullName(faker.name)
    const fileDirectoryPath: string = "../TestData/demo.jpg";
    await PIMPage.uploadFile(fileDirectoryPath)
})
When("Click on checkBox to enable login credentials for the Employee", async () => {
    await PIMPage.clickCheckBox()
})
When("fill the required information to create Login credentials for the Employee", async () => {
    const password = faker.internet.password();
    await PIMPage.fillCreateLoginDetails(faker.name.findName(), password, Data.createLoginDetails)
})
When("click save button", async () => {
    await PIMPage.clickSaveButton()

})
Then("Should navigated to {string} Page", async (header) => {
    await expect(PIMPage.personDetailsHeaderElement).toHaveTextContaining(header);
})