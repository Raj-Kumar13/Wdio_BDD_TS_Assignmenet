import Data from '../TestData/Data.json'
import { addLogs } from '../Utils/Commands'
class LeavesPage {
    get leaveHeaderElement() {
        return $("#menu_leave_viewLeaveModule")
    }
    async clickLeaveButton() {
        await this.leaveHeaderElement.click()
        addLogs(`Clicked Leave Button element value :  ${await this.leaveHeaderElement.selector}`)
    }
    get fromDateElement() {
        return $("//input[@name='leaveList[calFromDate]']")
    }
    get toDateElement() {
        return $("//input[@name='leaveList[calToDate]']")
    }
    get monthElement() {
        return $("//select[@class='ui-datepicker-month']")
    }
    get yearElement() {
        return $("//select[@class='ui-datepicker-year']")
    }
    get dayElement() {
        const day = Data.LeaveDates.To.day
        return $("//a[text()=" + day + "]")
    }
    async fillDates(LeaveDates: { From, To: { month, year } }) {
        await this.fromDateElement.setValue(LeaveDates.From)
        addLogs(`Entered from Data value : ${LeaveDates.From}`)

        await this.monthElement.selectByVisibleText(LeaveDates.To.month)
        await this.yearElement.selectByVisibleText(LeaveDates.To.year)
        await this.dayElement.click()
    
    }

    get showLeaveWithStatusCheckBox() {
        
        return $("#leaveList_chkSearchFilter_checkboxgroup_allcheck")
    }
    async clickStatusCheckBox() {
        await this.showLeaveWithStatusCheckBox.scrollIntoView()
        await this.showLeaveWithStatusCheckBox.click()
        addLogs(`Clicked status CheckBox All  ${await this.showLeaveWithStatusCheckBox.selector}`)
    }
    get employeeNameElement() {
        return $("#leaveList_txtEmployee_empName")
    }
    async setEmployeeName(EmployeeName) {
        await this.employeeNameElement.scrollIntoView()
        await this.employeeNameElement.setValue(EmployeeName)
        addLogs(`Entered Employee name value : ${await this.employeeNameElement.selector}`)
    }
    get subUnitDropDownElement() {
        return $("//select[@name='leaveList[cmbSubunit]']")
    }
    async setSubUnit(subUnit) {
        await this.subUnitDropDownElement.selectByVisibleText(subUnit)
        addLogs(`seleted SubUnit DropDown value : ${await this.subUnitDropDownElement.selector}`)
    }
    get includePastEmployees() {
        return $("//input[@name='leaveList[cmbWithTerminated]']")
    }
    async clickCheckBoxPastEmployess() {
        await this.includePastEmployees.click()
        addLogs(`Clicked Include Past employee CheckBox Element value : ${await this.includePastEmployees.selector}`)
    }
    get searchButtonElement() {
        return $("//input[@name='btnSearch']")
    }
    async clickSearchButton() {
        await this.searchButtonElement.scrollIntoView()
        await this.searchButtonElement.click()
        addLogs(`Clicked on search button Elemnet value : ${await this.searchButtonElement.selector}`)
    }
}
export default new LeavesPage;