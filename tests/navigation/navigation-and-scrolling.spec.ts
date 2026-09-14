import { test, expect } from '@playwright/test';

test.describe.serial('Navigation Tests', () => {
  test('navigation-and-scrolling', async ({ page }) => {
    // Navigate to the ROOT BRICKS homepage
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // 1. Smooth scroll behavior - Verify default scroll behavior is smooth
    await page.evaluate(() => {
      const scrollBehavior = window.getComputedStyle(document.documentElement).scrollBehavior;
      return scrollBehavior;
    });

    // 2. Nav link to AI Solutions - Click 'AI Solutions' link and verify scroll to #activity section
    const aiSolutionsLink = page.locator('nav a[href="#activity"]');
    await aiSolutionsLink.click();
    await page.waitForTimeout(1000); // Wait for smooth scroll animation
    
    const activitySection = page.locator('#activity');
    await expect(activitySection).toBeInViewport();
    
    const activityTitle = page.locator('#activity h2:has-text("AI Solutions")');
    await expect(activityTitle).toBeVisible();

    // 3. Nav link to Deployed Systems - Click 'Deployed Systems' link and verify scroll to #projects section
    const deployedSystemsLink = page.locator('nav a[href="#projects"]');
    await deployedSystemsLink.click();
    await page.waitForTimeout(1000); // Wait for smooth scroll animation
    
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeInViewport();
    
    const projectsTitle = page.locator('#projects h2:has-text("Deployed Systems")');
    await expect(projectsTitle).toBeVisible();

    // 4. Nav link to History - Click 'History' link and verify scroll to #history section
    const historyLink = page.locator('nav a[href="#history"]');
    await historyLink.click();
    await page.waitForTimeout(1000); // Wait for smooth scroll animation
    
    const historySection = page.locator('#history');
    await expect(historySection).toBeInViewport();
    
    const historyTitle = page.locator('#history h2:has-text("Operational History")');
    await expect(historyTitle).toBeVisible();

    // 5. Logo click scroll to top - Click ROOT BRICKS logo and verify scroll to page top
    const logo = page.locator('header div:has-text("ROOT BRICKS")').first();
    await logo.click();
    await page.waitForTimeout(1000); // Wait for smooth scroll animation
    
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100); // Should be at or near top

    // 6. Rapid scrolling - Test layout stability during rapid scrolling
    // Scroll down rapidly
    await page.evaluate(() => window.scrollTo({ top: 1000, behavior: 'auto' }));
    await page.waitForTimeout(100);
    await page.evaluate(() => window.scrollTo({ top: 2000, behavior: 'auto' }));
    await page.waitForTimeout(100);
    await page.evaluate(() => window.scrollTo({ top: 3000, behavior: 'auto' }));
    await page.waitForTimeout(100);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'auto' }));
    await page.waitForTimeout(500);
    
    // Verify layout is still intact after rapid scrolling
    const header = page.locator('header');
    await expect(header).toBeVisible();
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // 7. Browser back/forward - Verify browser navigation buttons work correctly
    // Navigate to different sections using hash
    await aiSolutionsLink.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#activity');
    
    await deployedSystemsLink.click();
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#projects');
    
    // Go back
    await page.goBack();
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#activity');
    await expect(activitySection).toBeInViewport();
    
    // Go forward
    await page.goForward();
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('#projects');
    await expect(projectsSection).toBeInViewport();
  });
});
