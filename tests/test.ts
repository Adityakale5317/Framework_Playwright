import test from "../src/utils/fixtures";
import ENV from "../src/utils/env"
import dontenv from "dotenv";

dontenv.config({
    path:`.env.test`,
    override:true
})


test("test", async ({ page, loginPage }) => {

    // handling windows locator

     console.log(ENV.BASE_URL);
    // console.log(ENV.USERNAME);
    // console.log(ENV.PASSWORD);

    await page.goto(ENV.BASE_URL);


   

   // await page.goto(`${baseURL}`);
   // await page.goto("https://letcode.in/signin");
     await loginPage.enterUserName("koushik1@letcode.in")
     await loginPage.enterPassword("Pass123$")

    // // handling frame locators

    
})