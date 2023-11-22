import { Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";



export default class LoginPage extends Wrapper {

    private loginPageElements = {
        username: "",
        password:""
    }


    constructor(public page: Page) {
        super(page);
    }

    public async enterUserName(username: string) {
     const user = await this.findLocator("input[name='email']");
     await user.type(username);
    }

    public async enterPassword(password: string) {
        const pass = await this.findLocator("input[name='password']");
        await pass.type(password);
    }
}