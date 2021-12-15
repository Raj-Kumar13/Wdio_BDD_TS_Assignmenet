Feature: Automate Orange HRM Portal



    Scenario: user Log in with a valid credentials
        Given I should landing on "https://opensource-demo.orangehrmlive.com/" Page
        Then It should display "LOGIN Panel" on landing page
        When enter valid UserName and Password in both elements
        And click LOGIN button
        Then should land on "dashboard" page

    Scenario: Navigating to Admin finding of a spicefic User and reset all elements
        When After Landing on Dashboard page click on ADMIN button on the menu bar
        Then Should be navigated to "viewSystemUsers" Page
        When fill Username,User Role,Employee Name,status Elements and click Search Button
        Then should display the Matched User details
        When click on reset button

    Scenario: Add System User
        When Click on Add button
        Then Should be navigated to "Add User"
        When fill the Required Elements Like User Role,Employee Name,Username,Status,Password,Confirm Password
        And click submit button
        Then should display Successfully Saved and navigated to "viewSystemUsers" page


    Scenario: Add Employee to Employee List
        When Click on PIM button
        And Click on Add Employee button
        Then Should be landing on "addEmployee" page
        When fill the Required details like FirstName,MiddleName,LastName,Photograph


