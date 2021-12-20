import { Given, When, Then } from "@cucumber/cucumber";
import AdminPage from "../pageobjects/AdminPage";
import LeavesPage from "../pageobjects/LeavesPage";
import LoginPage from "../pageobjects/LoginPage";
import PIMPage from "../pageobjects/PIMPage";
import Data from "../TestData/Data.json";
import faker from 'faker'



Given("I should landing on {string} Page", async (url) => {
    await LoginPage.openPage(url);
})
Then("It should display {string} on landing page", async (header) => {
    await expect(LoginPage.loginPanelHeaderElement).toHaveTextContaining(header);
})
When("enter valid UserName and Password in both elements", async () => {
    await LoginPage.enterCredintials(Data.credentials);
})
When("click LOGIN button", async () => {
    await LoginPage.clickLoginButton();
})
Then("should land on {string} page", async (urlElement) => {
    await expect(browser).toHaveUrlContaining(urlElement);
})
