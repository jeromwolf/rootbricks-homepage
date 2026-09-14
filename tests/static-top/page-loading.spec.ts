// spec: specs/rootbricks-test-plan.md
// Test Suite: Static Content - Top Section

import { test, expect } from '@playwright/test';

test.describe('Static Content - Top Section', () => {

  test('Page loads successfully', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // 2. Wait for the page to fully load
    await page.waitForLoadState('networkidle');

    // Verification: Page title is 'ROOT BRICKS | Connecting Data, Designing Knowledge'
    await expect(page).toHaveTitle('ROOT BRICKS | Connecting Data, Designing Knowledge');

    // Verification: Main content area is visible
    const mainElement = page.locator('main');
    await expect(mainElement).toBeVisible();
  });

  test('Header renders correctly', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // 2. Locate the header element with class containing 'fixed'
    const header = page.locator('header.fixed');
    await expect(header).toBeVisible();

    // 3. Verify the ROOT BRICKS logo is visible
    const logo = page.locator('header').getByText('ROOT BRICKS');
    await expect(logo).toBeVisible();

    // 4. Verify the logo contains a black circular icon
    const logoIcon = page.locator('header .w-4.h-4.bg-black.rounded-full');
    await expect(logoIcon).toBeVisible();

    // 5. Check for navigation menu on desktop (md breakpoint and above)
    const nav = page.locator('header nav');
    await expect(nav).toBeAttached();

    // 6. Verify navigation links are present: 'AI Solutions'
    const aiSolutionsLink = page.locator('header nav a[href="#activity"]');
    await expect(aiSolutionsLink).toHaveText('AI Solutions');

    // 6. Verify navigation links are present: 'Deployed Systems'
    const deployedSystemsLink = page.locator('header nav a[href="#projects"]');
    await expect(deployedSystemsLink).toHaveText('Deployed Systems');

    // 6. Verify navigation links are present: 'History'
    const historyLink = page.locator('header nav a[href="#history"]');
    await expect(historyLink).toHaveText('History');
  });

  test('All sections visible', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // 2. Scroll through the entire page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.evaluate(() => window.scrollTo(0, 0));

    // 3. Verify Hero section is present
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // 4. Verify Core Services section is present
    const coreServicesHeading = page.getByRole('heading', { name: 'AI Agent Development' });
    await expect(coreServicesHeading).toBeVisible();

    // 5. Verify AI Solutions section with id 'activity' is present
    const aiSolutionsSection = page.locator('section#activity');
    await expect(aiSolutionsSection).toBeAttached();

    // 6. Verify Deployed Systems section with id 'projects' is present
    const deployedSystemsSection = page.locator('section#projects');
    await expect(deployedSystemsSection).toBeAttached();

    // 7. Verify Operational History section with id 'history' is present
    const historySection = page.locator('section#history');
    await expect(historySection).toBeAttached();

    // 8. Verify Footer section is present
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('Core Services - Three service cards', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // 2. Scroll to the Core Services section
    await page.locator('text=AI Agent Development').scrollIntoViewIfNeeded();

    // Verification: Three service cards are visible
    const allCards = page.locator('h3:has-text("AI Agent Development"), h3:has-text("RAG & Knowledge Graph"), h3:has-text("System Integration")');
    await expect(allCards).toHaveCount(3);

    // Verification: First card title is 'AI Agent Development'
    const firstCardHeading = page.getByRole('heading', { name: 'AI Agent Development', exact: true });
    await expect(firstCardHeading).toBeVisible();

    // Verification: Second card title is 'RAG & Knowledge Graph'
    const secondCardHeading = page.getByRole('heading', { name: 'RAG & Knowledge Graph', exact: true });
    await expect(secondCardHeading).toBeVisible();

    // Verification: Third card title is 'System Integration'
    const thirdCardHeading = page.getByRole('heading', { name: 'System Integration', exact: true });
    await expect(thirdCardHeading).toBeVisible();
  });

  test('AI Agent card - Brain icon and Palantir text', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // 2. Scroll to Core Services section
    await page.locator('text=AI Agent Development').scrollIntoViewIfNeeded();

    // Verification: AI Agent Development card has Brain icon
    const iconContainer = page.locator('.w-12.h-12.bg-black').first();
    await expect(iconContainer).toBeVisible();

    // Verification: Card contains text 'Palantir 스타일의 온톨로지'
    const cardContent = page.locator('text=Palantir 스타일의 온톨로지');
    await expect(cardContent).toBeVisible();
  });

  test('RAG & Knowledge Graph card - Database icon and text', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // 2. Scroll to Core Services section
    await page.locator('text=RAG & Knowledge Graph').scrollIntoViewIfNeeded();

    // Verification: RAG & Knowledge Graph card has Database icon
    const iconContainers = page.locator('.w-12.h-12.bg-black');
    await expect(iconContainers.nth(1)).toBeVisible();

    // Verification: Card contains text '지식 그래프(Knowledge Graph)'
    const cardContent = page.locator('text=지식 그래프(Knowledge Graph)');
    await expect(cardContent).toBeVisible();
  });

  test('System Integration card - Layers icon and 20+ years text', async ({ page }) => {
    // 1. Navigate to http://localhost:3000
    await page.goto('http://localhost:3000');

    // 2. Scroll to Core Services section
    await page.locator('text=System Integration').scrollIntoViewIfNeeded();

    // Verification: System Integration card has Layers icon
    const iconContainers = page.locator('.w-12.h-12.bg-black');
    await expect(iconContainers.nth(2)).toBeVisible();

    // Verification: Card contains text '20년 이상의'
    const cardContent = page.locator('text=20년 이상의');
    await expect(cardContent).toBeVisible();
  });

});
