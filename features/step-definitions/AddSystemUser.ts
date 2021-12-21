import { Given, Then, When } from '@cucumber/cucumber'
import AdminPage from '../pageobjects/AdminPage';
import faker from 'faker'
import Data from "../TestData/Data.json"
When("Click on Add button", async () => {
    await AdminPage.clickAddButton()
})
Then("Should be navigated to {string}", async (header) => {
    await expect(AdminPage.addUserHeaderElement).toHaveTextContaining(header);
})
When("fill the Required Elements Like User Role,Employee Name,Username,Status,Password,Confirm Password", async () => {
    await AdminPage.addUserDetails(Data.addUser, faker.internet.userName())
})
When("click submit button", async () => {
    await AdminPage.clickSubmitButton()

})

Then("should display Successfully Saved and navigated to {string} page", async (urlElement) => {
    await AdminPage.successfullySavedMassageElement.waitForDisplayed()
    await expect(AdminPage.successfullySavedMassageElement).toHaveTextContaining("Successfully Saved")
    await expect(browser).toHaveUrlContaining(urlElement)
})
