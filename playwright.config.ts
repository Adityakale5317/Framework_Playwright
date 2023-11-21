import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/login.page.ts"],
  timeout: 5000,
  reporter: "html",
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "off"
  },
  globalSetup: "src/utils/globalSetup.ts"
};

export default config;