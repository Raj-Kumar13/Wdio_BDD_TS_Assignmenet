import { Given, When, Then } from "@cucumber/cucumber";
import AdminPage from "../pageobjects/AdminPage";
import LoginPage from "../pageobjects/LoginPage";
import PIMPage from "../pageobjects/PIMPage";
import Data from "../TestData/Data.json";

Given("I should landing on {string} Page", async (url) => {
    await LoginPage.openPage(url);
})
Then("It should display {string} on landing page", async (header) => {
    await expect(LoginPage.loginPanelHeaderElement).toHaveTextContaining(header);
})
When("enter valid UserName and Password in both elements", async () => {
    await LoginPage.enterCredintials();
})
When("click LOGIN button", async () => {
    await LoginPage.clickLoginButton();
})
Then("should land on {string} page", async (urlElement) => {
    await expect(browser).toHaveUrlContaining(urlElement);
})
//=================================================================================

When("After Landing on Dashboard page click on ADMIN button on the menu bar", async () => {
    await AdminPage.clickAdminButton();
})
Then("Should be navigated to {string} Page", async (urlElement) => {
    await expect(browser).toHaveUrlContaining(urlElement);
})
When("fill Username,User Role,Employee Name,status Elements and click Search Button", async () => {
    await AdminPage.enterDetails();
    await AdminPage.clickSearch();
})
Then("should display the Matched User details", async () => {
    await AdminPage.expectedUsernameElement.waitForDisplayed()
    await expect(AdminPage.expectedUsernameElement).toHaveText(Data.searchUser.Username)
    await expect(AdminPage.expectUserRoleElement).toHaveText(Data.searchUser.UserRole);


})
When("click on reset button", async () => {
    await AdminPage.clickResetButton();

})
//================================================================

When("Click on Add button", async () => {
    await AdminPage.clickAddButton()
})
Then("Should be navigated to {string}", async (header) => {
    await expect(AdminPage.addUserHeaderElement).toHaveTextContaining(header);
})
When("fill the Required Elements Like User Role,Employee Name,Username,Status,Password,Confirm Password", async () => {
    await AdminPage.addUserDetails()
})
When("click submit button", async () => {
    await AdminPage.clickSubmitButton()

})

Then("should display Successfully Saved and navigated to {string} page", async (urlElement) => {
    await AdminPage.successfullySavedMassageElement.waitForDisplayed()
    await expect(AdminPage.successfullySavedMassageElement).toHaveTextContaining("Successfully Saved")

})


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
    await PIMPage.fillFullName()

})