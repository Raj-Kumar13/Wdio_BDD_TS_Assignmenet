import {Given, When, Then} from '@cucumber/cucumber'
import LeavesPage from '../pageobjects/LeavesPage'
import Data from '../TestData/Data.json'
When("click on Leave button on meanu bar", async () => {
    await LeavesPage.clickLeaveButton()
  })
  Then("should be land on {string} page", async (urlElement) =>{
      await expect(browser).toHaveUrlContaining(urlElement)
  })
  When("fill the required details from, To,Show Leave with Status,Employee sub unit", async () =>{
      await LeavesPage.fillDates(Data.LeaveDates)
     // await LeavesPage.clickDateElement()
      await  LeavesPage.clickStatusCheckBox()
      await LeavesPage.setEmployeeName(Data.LeaveDates.EmployeeName)
      await LeavesPage.setSubUnit(Data.LeaveDates.subUnit)
      await LeavesPage.clickCheckBoxPastEmployess()
  })
  When("click search button", async () =>{
      await LeavesPage.clickSearchButton()
  })
  