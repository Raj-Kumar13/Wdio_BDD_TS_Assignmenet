import Data from '../TestData/Data.json'
class LeavesPage{
    get leaveHeaderElement(){
        return $("#menu_leave_viewLeaveModule")
    }
    async clickLeaveButton(){
        await this.leaveHeaderElement.click()
    }
    get fromDateElement(){
        return $("//input[@name='leaveList[calFromDate]']")
    }
    get toDateElement(){
        return $("//input[@name='leaveList[calToDate]']")
    }
    async fillDates(){
      await this.fromDateElement.setValue(Data.LeaveDates.From)
      await this.toDateElement.setValue(Data.LeaveDates.To)    
    }
    get showLeaveWithStatusCheckBox(){
     return $("#leaveList_chkSearchFilter_checkboxgroup_allcheck")
    }
    async clickStatusCheckBox(){
        await this.showLeaveWithStatusCheckBox.click()
    }
    get employeeNameElement(){
        return $("//input[@id='leaveList_txtEmployee_empName']")
    }
    async setEmployeeName(){
        await this.employeeNameElement.setValue(Data.LeaveDates.Employee)
    }
    get subUnitElement(){
        return $("//select[@name='leaveList[cmbSubunit]']")
    }
    async setSubUnit(){
        await this.subUnitElement.selectByVisibleText(Data.LeaveDates.subUnit)
    }
    get includePastEmployees(){
        return $("//input[@name='leaveList[cmbWithTerminated]']")
    }
    async clickCheckBoxPastEmployess(){
        await this.includePastEmployees.click()
    }
    get searchButtonElement(){
        return $("//input[@name='btnSearch']")
    }
    async clickSearchButton(){
        await this.searchButtonElement.click()
    }
}
export default new LeavesPage;