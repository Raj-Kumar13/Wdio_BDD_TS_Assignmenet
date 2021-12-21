
import { addLogs } from '../Utils/Commands'
class LoginPage {
    async openPage(url: string) {
        await browser.url(url);
        addLogs(`landing URL : ${url}`)
        await browser.maximizeWindow();
        addLogs("maximize Window")
    }

    get loginPanelHeaderElement() {
        return $("#logInPanelHeading")
    }

    get userNameElement() {
        return $("//div[@class='textInputContainer']/input[@name='txtUsername']");
    }
    get passwordElement() {
        return $("//div[@class='textInputContainer']/input[@name='txtPassword']");
    }

    async enterCredintials(credintials: { UserName: string, Password: any }) {
        await this.userNameElement.setValue(credintials.UserName);
        addLogs(`Entered User Name Value : ${credintials.UserName}`)
        await this.passwordElement.setValue(credintials.Password);
        addLogs(`Entered Password Value : ${credintials.Password}`)
    }

    get loginButtonElement() {
        return $("#divLoginButton>#btnLogin");
    }
    async clickLoginButton() {
        await this.loginButtonElement.click();
        addLogs(`Clicked login Button element value : ${await this.loginButtonElement.selector}`)
    }

}
export default new LoginPage;