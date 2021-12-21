import { Given, When, Then } from '@cucumber/cucumber'
import AdminPage from '../pageobjects/AdminPage';
import Data from '../TestData/Data.json'
When("After Landing on Dashboard page click on ADMIN button on the menu bar", async () => {
    await AdminPage.clickAdminButton();
})
Then("Should be navigated to {string} Page", async (urlElement) => {
    await expect(browser).toHaveUrlContaining(urlElement);
})
When("fill Username,User Role,Employee Name,status Elements and click Search Button", async () => {
    await AdminPage.enterDetails(Data.searchUser);
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
Then("UserName and EmployeeName element should be empty", async () => {
    await expect(AdminPage.systemUserUsernameElement.getText()).not.toBeExisting()
    await expect(AdminPage.systemUserEmployeeNameElement.getText()).not.toBeExisting()
})