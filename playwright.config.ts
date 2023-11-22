import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';
const config:PlaywrightTestConfig = {
  testMatch:["tests/test.ts"],
  use: {
    headless:false,
    screenshot:"only-on-failure",
    //baseURL:'https://letcode.in/signin',
    ignoreHTTPSErrors:true
  },
  reporter: [["dot"],["json",{
    outputFile:"jsonReports/jsonReport.json"
  }],["html",{
    open:"never"
  }]]
};

export default config;