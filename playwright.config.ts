import { defineConfig, devices } from '@playwright/test';

/**
 * ROOT BRICKS Playwright Test Configuration
 * Supports parallel test execution with 11 worker groups
 */
export default defineConfig({
  testDir: './tests',

  // Run all test files in parallel
  fullyParallel: true,

  // Fail build on CI if accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // Use multiple workers for parallel execution
  workers: process.env.CI ? 4 : 11,

  // Reporter options
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  // Shared settings for all projects
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // Test projects for different browsers and viewports
  projects: [
    // Static content tests - fully parallel
    {
      name: 'static-chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: [
        '**/static-top/**',
        '**/static-ai-solutions/**',
        '**/static-deployed/**',
        '**/static-timeline/**'
      ],
    },

    // Sequential tests - animations, navigation, performance
    {
      name: 'sequential-chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: [
        '**/animation/**',
        '**/navigation/**',
        '**/external-links/**',
        '**/performance/**'
      ],
    },

    // Mobile responsive tests (using Chromium with mobile viewport)
    {
      name: 'mobile',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 375, height: 667 },
        isMobile: true,
      },
      testMatch: '**/mobile/**',
    },

    // Desktop responsive tests
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
      testMatch: '**/desktop/**',
    },

    // Accessibility tests
    {
      name: 'accessibility',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/accessibility/**',
    },
  ],

  // Start local dev server before running tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
