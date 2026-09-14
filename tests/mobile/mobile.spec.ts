// spec: specs/rootbricks-test-plan.md
// Test Suite: Mobile Responsive Tests
// Viewport: iPhone SE (375x667)

import { test, expect } from '@playwright/test';

test.describe('Mobile Responsive Tests', () => {

  test.use({ viewport: { width: 375, height: 667 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
  });

  test('Mobile layout and navigation', async ({ page }) => {
    // 1. Verify navigation menu is hidden on mobile (uses hidden md:flex)
    const nav = page.locator('header nav');
    await expect(nav).toBeHidden();

    // 2. Verify logo is displayed
    const logo = page.locator('header').getByText('ROOT BRICKS');
    await expect(logo).toBeVisible();

    // 3. Verify logo has black dot icon
    const logoDot = page.locator('header .w-4.h-4.bg-black.rounded-full');
    await expect(logoDot).toBeVisible();
  });

  test('Hero mobile typography', async ({ page }) => {
    // 1. Verify h1 is visible
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // 2. Verify h1 has text-5xl class (mobile breakpoint)
    const h1Classes = await h1.getAttribute('class');
    expect(h1Classes).toContain('text-5xl');

    // 3. Verify cursor element exists with animation (motion.span)
    const cursor = page.locator('h1 span.inline-block.w-4.bg-black');
    await expect(cursor).toBeVisible();

    // 4. Verify hero subtitle is visible
    const subtitle = page.getByText('데이터를 연결하고 지식을 설계하여');
    await expect(subtitle).toBeVisible();
  });

  test('Core Services mobile grid', async ({ page }) => {
    // 1. Scroll to Core Services section
    await page.getByRole('heading', { name: 'AI Agent Development' }).scrollIntoViewIfNeeded();

    // 2. Verify Core Services grid has grid-cols-1 class
    const grid = page.locator('.grid.grid-cols-1').first();
    await expect(grid).toBeVisible();

    // 3. Verify all 3 service cards are visible
    await expect(page.getByRole('heading', { name: 'AI Agent Development' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'RAG & Knowledge Graph' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'System Integration' })).toBeVisible();

    // 4. Verify cards are stacked vertically
    const aiAgentCard = page.getByRole('heading', { name: 'AI Agent Development' });
    const ragCard = page.getByRole('heading', { name: 'RAG & Knowledge Graph' });

    const aiAgentBox = await aiAgentCard.boundingBox();
    const ragBox = await ragCard.boundingBox();

    // RAG card should be below AI Agent card in mobile layout
    expect(ragBox!.y).toBeGreaterThan(aiAgentBox!.y);
  });

  test('AI Solutions mobile grid', async ({ page }) => {
    // 1. Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();

    // 2. Verify section header
    await expect(page.locator('#activity h2')).toContainText('AI Solutions');
    await expect(page.getByText('SYNCED WITH GITHUB')).toBeVisible();

    // 3. Verify grid is 1-column on mobile
    const grid = page.locator('#activity').locator('div.grid').first();
    const gridClasses = await grid.getAttribute('class');
    expect(gridClasses).toContain('grid-cols-1');

    // 4. Verify project cards are visible
    const projectTitles = [
      'Flux Ontology Platform',
      'Open WebUI RAG System',
      'A2A Sentiment Analysis',
      'NRC ADAMS Search MCP',
      'FDE Curriculum',
      'AI Education Simulator'
    ];

    for (const title of projectTitles) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }
  });

  test('Deployed Systems mobile grid', async ({ page }) => {
    // 1. Scroll to Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // 2. Verify section header
    await expect(page.getByRole('heading', { name: 'Deployed Systems' })).toBeVisible();
    await expect(page.getByText('Enterprise-grade solutions delivered.')).toBeVisible();

    // 3. Verify grid is 1-column on mobile
    const grid = page.locator('#projects').locator('div.grid').first();
    const gridClasses = await grid.getAttribute('class');
    expect(gridClasses).toContain('grid-cols-1');

    // 4. Verify all 6 deployed systems are visible
    const systemTitles = [
      'KB Kookmin Card AI Chatbot',
      'VoCom Voice Framework',
      'Mobility Platform',
      'Olive Healthcare',
      'Smart Monitoring',
      'Radar Computer'
    ];

    for (const title of systemTitles) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }
  });

  test('Timeline mobile layout', async ({ page }) => {
    // 1. Scroll to Operational History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // 2. Verify section header
    await expect(page.locator('#history h2')).toContainText('Operational History');

    // 3. Verify timeline items exist
    const timelineItems = page.locator('#history .space-y-12 > div');
    await expect(timelineItems.first()).toBeVisible();

    // 4. Verify dates are displayed above roles
    await expect(page.getByText('2024 — PRESENT')).toBeVisible();
    await expect(page.getByText('AI Agent & RAG Architecture')).toBeVisible();

    // 5. Verify all timeline entries are visible
    const periods = [
      '2024 — PRESENT',
      '2017 — 2023',
      '2015 — 2016',
      '2011 — 2014',
      '2005 — 2010',
      '2001 — 2005'
    ];

    for (const period of periods) {
      await expect(page.getByText(period)).toBeVisible();
    }
  });

  test('Footer mobile layout', async ({ page }) => {
    // 1. Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    // 2. Verify footer is center-aligned
    const footer = page.locator('footer');
    const footerClasses = await footer.getAttribute('class');
    expect(footerClasses).toContain('text-center');

    // 3. Verify email link is visible and touch-friendly
    const emailLink = page.locator('a[href="mailto:jeromwolf@gmail.com"]');
    await expect(emailLink).toBeVisible();

    // 4. Verify YouTube link is visible
    const youtubeLink = page.locator('a[href="https://www.youtube.com/@ontology-hub"]');
    await expect(youtubeLink).toBeVisible();
    await expect(page.getByText('Ontology Hub')).toBeVisible();

    // 5. Verify copyright text
    const currentYear = new Date().getFullYear();
    await expect(page.getByText(`© ${currentYear} Root Bricks Inc.`)).toBeVisible();
  });

  test('Very narrow viewport (320px)', async ({ page }) => {
    // 1. Set viewport to very narrow (320px - smallest common mobile width)
    await page.setViewportSize({ width: 320, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    // 2. Verify no horizontal scroll (allow small tolerance for scrollbars)
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);

    // 3. Verify header is still visible
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // 4. Verify logo is still readable
    await expect(page.locator('header').getByText('ROOT BRICKS', { exact: true })).toBeVisible();

    // 5. Verify major sections are accessible
    await page.locator('#activity').scrollIntoViewIfNeeded();
    await expect(page.locator('#activity')).toBeVisible();

    await page.locator('#projects').scrollIntoViewIfNeeded();
    await expect(page.locator('#projects')).toBeVisible();

    await page.locator('#history').scrollIntoViewIfNeeded();
    await expect(page.locator('#history')).toBeVisible();

    // 6. Verify footer links are still accessible
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('a[href="mailto:jeromwolf@gmail.com"]')).toBeVisible();
    await expect(page.getByText('Ontology Hub')).toBeVisible();
  });

});
