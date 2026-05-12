import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false,

  workers: 1,

  timeout: 300000,

  retries: 0,

  reporter: [

    ['html', { open: 'always' }],

    ['json', {
      outputFile: 'test-results.json'
    }],

    ['allure-playwright']
  ],

  use: {

    baseURL:
      'https://test.jobtrain.co.uk/voyagecare/',

    headless: false,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    launchOptions: {

      slowMo: 1000
    },

    viewport: {
      width: 1280,
      height: 720
    }
  },

  projects: [

    {
      name: 'chromium',

      use: {
        browserName: 'chromium'
      }
    }
  ]
});