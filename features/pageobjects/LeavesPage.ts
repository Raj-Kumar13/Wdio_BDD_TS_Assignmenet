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
    get monthElement(){
        return $("//select[@class='ui-datepicker-month']")
    }
    get yearElement(){
        return $("//select[@class='ui-datepicker-year']")
    }
    get dayElement(){
        const day =Data.LeaveDates.To.day
        return $("//a[text()="+day+"]")
    }
    async fillDates(fromDate,toMonth,toYear){
      await this.fromDateElement.setValue(fromDate )

      await this.monthElement.selectByVisibleText(toMonth )
      await this.yearElement.selectByVisibleText(toYear )
      await this.dayElement.click()
      //await this.toDateElement.setValue(toDate)   
    }
    
    get showLeaveWithStatusCheckBox(){
        //return $("#leaveList_chkSearchFilter_3")
        return $("#leaveList_chkSearchFilter_checkboxgroup_allcheck")
    }
    async clickStatusCheckBox(){
        await this.showLeaveWithStatusCheckBox.scrollIntoView()
        await this.showLeaveWithStatusCheckBox.click()
    }
    get employeeNameElement(){
        return $("//input[@id='leaveList_txtEmployee_empName']")
    }
    async setEmployeeName(employeeName){
        await this.employeeNameElement.scrollIntoView()
        await this.employeeNameElement.setValue(employeeName )
    }
    get subUnitElement(){
        return $("//select[@name='leaveList[cmbSubunit]']")
    }
    async setSubUnit(subUnit){
        await this.subUnitElement.selectByVisibleText(subUnit )
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
        await this.searchButtonElement.scrollIntoView()
        await this.searchButtonElement.click()
    }
}
export default new LeavesPage;