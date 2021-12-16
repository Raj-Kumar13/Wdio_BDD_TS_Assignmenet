import Data from "../TestData/Data.json";
import faker from 'faker';
class LoginPage{
    async openPage(url:string){
        await browser.url(url);
        await browser.maximizeWindow();
    }

    get loginPanelHeaderElement(){
        return $("#logInPanelHeading")
    }

    get userNameElement(){
        return $("//div[@class='textInputContainer']/input[@name='txtUsername']");
    }
    get passwordElement(){
        return $("//div[@class='textInputContainer']/input[@name='txtPassword']");
    }

    async enterCredintials(name:string,password){
        await this.userNameElement.setValue(name);
        await this.passwordElement.setValue(password);
    }

    get loginButtonElement(){
        return $("//input[@name='Submit']");
    }
    async clickLoginButton(){
        await this.loginButtonElement.click();
    }
    
}
export default new LoginPage;