import { test, expect } from '@playwright/test';

test.describe('Desktop Responsive Tests', () => {
  
  test('Desktop layout and navigation', async ({ page }) => {
    // Set viewport to 1920x1080
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Navigate to localhost:3000
    await page.goto('http://localhost:3000');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Verify navigation menu is visible (md:flex on desktop)
    const nav = page.locator('nav.md\\:flex');
    await expect(nav).toBeVisible();
    
    // Verify 3 navigation links are displayed horizontally
    const aiSolutionsLink = nav.locator('a[href="#activity"]');
    const deployedSystemsLink = nav.locator('a[href="#projects"]');
    const historyLink = nav.locator('a[href="#history"]');
    
    await expect(aiSolutionsLink).toBeVisible();
    await expect(aiSolutionsLink).toHaveText('AI Solutions');
    
    await expect(deployedSystemsLink).toBeVisible();
    await expect(deployedSystemsLink).toHaveText('Deployed Systems');
    
    await expect(historyLink).toBeVisible();
    await expect(historyLink).toHaveText('History');
    
    // Verify links are displayed horizontally (flex layout)
    const navBox = await nav.boundingBox();
    const link1Box = await aiSolutionsLink.boundingBox();
    const link2Box = await deployedSystemsLink.boundingBox();
    const link3Box = await historyLink.boundingBox();
    
    // Check that links are on the same horizontal line (same y coordinate)
    expect(link1Box?.y).toBe(link2Box?.y);
    expect(link2Box?.y).toBe(link3Box?.y);
  });

  test('Hero desktop typography', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Verify h1 element has large text size
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
    
    // Check h1 has large text classes (text-7xl or text-8xl)
    const h1Classes = await h1.getAttribute('class');
    expect(h1Classes).toMatch(/text-(7xl|8xl)/);
    
    // Verify cursor element height
    const cursor = page.locator('h1 span.inline-block').first();
    await expect(cursor).toBeVisible();
    
    // Check cursor has h-24 class (96px height)
    const cursorClasses = await cursor.getAttribute('class');
    expect(cursorClasses).toContain('h-24');
    
    // Verify cursor actual height is approximately 96px
    const cursorBox = await cursor.boundingBox();
    expect(cursorBox?.height).toBeGreaterThanOrEqual(90);
    expect(cursorBox?.height).toBeLessThanOrEqual(100);
  });

  test('Core Services 3-column grid', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Scroll to Core Services section
    const coreServicesSection = page.locator('section').filter({ hasText: 'AI Agent Development' }).first();
    await coreServicesSection.scrollIntoViewIfNeeded();
    
    // Verify grid has 3 columns
    const grid = coreServicesSection.locator('.grid');
    const gridClasses = await grid.getAttribute('class');
    expect(gridClasses).toContain('md:grid-cols-3');
    
    // Verify 3 service cards are visible
    const aiAgentCard = grid.locator('div').filter({ hasText: 'AI Agent Development' });
    const ragCard = grid.locator('div').filter({ hasText: 'RAG & Knowledge Graph' });
    const integrationCard = grid.locator('div').filter({ hasText: 'System Integration' });
    
    await expect(aiAgentCard).toBeVisible();
    await expect(ragCard).toBeVisible();
    await expect(integrationCard).toBeVisible();
    
    // Verify cards are displayed horizontally in a row
    const card1Box = await aiAgentCard.boundingBox();
    const card2Box = await ragCard.boundingBox();
    const card3Box = await integrationCard.boundingBox();
    
    // Cards should be on the same row (similar y coordinates)
    expect(Math.abs((card1Box?.y || 0) - (card2Box?.y || 0))).toBeLessThan(10);
    expect(Math.abs((card2Box?.y || 0) - (card3Box?.y || 0))).toBeLessThan(10);
    
    // Cards should be side by side (x coordinates increase)
    expect((card1Box?.x || 0)).toBeLessThan((card2Box?.x || 0));
    expect((card2Box?.x || 0)).toBeLessThan((card3Box?.x || 0));
  });

  test('AI Solutions 3-column grid', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Scroll to AI Solutions section
    const aiSolutionsSection = page.locator('section#activity');
    await aiSolutionsSection.scrollIntoViewIfNeeded();
    
    // Wait for content to be visible
    await page.waitForTimeout(500);
    
    // Verify 3-column grid layout
    const grid = aiSolutionsSection.locator('.grid');
    const gridClasses = await grid.getAttribute('class');
    expect(gridClasses).toContain('md:grid-cols-3');
    
    // Verify 6 projects are displayed
    const projectCards = grid.locator('div.group');
    await expect(projectCards).toHaveCount(6);
    
    // Verify projects are in 2 rows x 3 columns layout
    const firstRowProjects = [
      projectCards.filter({ hasText: 'Flux Ontology Platform' }),
      projectCards.filter({ hasText: 'Open WebUI RAG System' }),
      projectCards.filter({ hasText: 'A2A Sentiment Analysis' })
    ];
    
    const secondRowProjects = [
      projectCards.filter({ hasText: 'NRC ADAMS Search MCP' }),
      projectCards.filter({ hasText: 'FDE Curriculum' }),
      projectCards.filter({ hasText: 'AI Education Simulator' })
    ];
    
    // Check first row is on same horizontal line
    const row1Boxes = await Promise.all(firstRowProjects.map(p => p.boundingBox()));
    expect(Math.abs((row1Boxes[0]?.y || 0) - (row1Boxes[1]?.y || 0))).toBeLessThan(10);
    expect(Math.abs((row1Boxes[1]?.y || 0) - (row1Boxes[2]?.y || 0))).toBeLessThan(10);
    
    // Check second row is on same horizontal line
    const row2Boxes = await Promise.all(secondRowProjects.map(p => p.boundingBox()));
    expect(Math.abs((row2Boxes[0]?.y || 0) - (row2Boxes[1]?.y || 0))).toBeLessThan(10);
    expect(Math.abs((row2Boxes[1]?.y || 0) - (row2Boxes[2]?.y || 0))).toBeLessThan(10);
  });

  test('Deployed Systems 3-column grid', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Scroll to Deployed Systems section
    const deployedSection = page.locator('section#projects');
    await deployedSection.scrollIntoViewIfNeeded();
    
    // Wait for content to be visible
    await page.waitForTimeout(500);
    
    // Verify lg:grid-cols-3 layout
    const grid = deployedSection.locator('.grid');
    const gridClasses = await grid.getAttribute('class');
    expect(gridClasses).toContain('lg:grid-cols-3');
    
    // Verify 6 systems are displayed
    const systemCards = grid.locator('div.group');
    await expect(systemCards).toHaveCount(6);
    
    // Get positions of all cards
    const cardBoxes = await Promise.all(
      Array.from({ length: 6 }, (_, i) => systemCards.nth(i).boundingBox())
    );
    
    // Verify first row (3 cards)
    expect(Math.abs((cardBoxes[0]?.y || 0) - (cardBoxes[1]?.y || 0))).toBeLessThan(10);
    expect(Math.abs((cardBoxes[1]?.y || 0) - (cardBoxes[2]?.y || 0))).toBeLessThan(10);
    
    // Verify second row (3 cards)
    expect(Math.abs((cardBoxes[3]?.y || 0) - (cardBoxes[4]?.y || 0))).toBeLessThan(10);
    expect(Math.abs((cardBoxes[4]?.y || 0) - (cardBoxes[5]?.y || 0))).toBeLessThan(10);
    
    // Verify cards are horizontally arranged
    expect((cardBoxes[0]?.x || 0)).toBeLessThan((cardBoxes[1]?.x || 0));
    expect((cardBoxes[1]?.x || 0)).toBeLessThan((cardBoxes[2]?.x || 0));
  });

  test('Timeline horizontal layout', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Scroll to Operational History section
    const historySection = page.locator('section#history');
    await historySection.scrollIntoViewIfNeeded();
    
    // Wait for content to be visible
    await page.waitForTimeout(500);
    
    // Get first timeline item
    const firstTimelineItem = historySection.locator('.space-y-12 > div').first();
    await expect(firstTimelineItem).toBeVisible();
    
    // Verify flex-row layout
    const timelineClasses = await firstTimelineItem.getAttribute('class');
    expect(timelineClasses).toContain('md:flex-row');
    
    // Verify date section has w-48 class (192px width)
    const dateSection = firstTimelineItem.locator('div.md\\:w-48');
    await expect(dateSection).toBeVisible();
    
    // Verify date section width
    const dateBox = await dateSection.boundingBox();
    expect(dateBox?.width).toBeGreaterThanOrEqual(180);
    expect(dateBox?.width).toBeLessThanOrEqual(200);
    
    // Verify content section is on the right
    const contentSection = firstTimelineItem.locator('div.flex-1');
    await expect(contentSection).toBeVisible();
    
    // Verify horizontal layout (date on left, content on right)
    const contentBox = await contentSection.boundingBox();
    expect((dateBox?.x || 0)).toBeLessThan((contentBox?.x || 0));
    
    // Verify they are on the same horizontal line
    expect(Math.abs((dateBox?.y || 0) - (contentBox?.y || 0))).toBeLessThan(20);
  });

  test('Wide screen max-width constraint', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check Hero section has max-w-7xl (1280px)
    const heroSection = page.locator('section').first();
    const heroClasses = await heroSection.getAttribute('class');
    expect(heroClasses).toContain('max-w-7xl');
    
    // Verify content is centered
    const heroBox = await heroSection.boundingBox();
    expect(heroBox?.width).toBeLessThanOrEqual(1280);
    
    // Check Core Services section
    const coreServicesContainer = page.locator('section').filter({ hasText: 'AI Agent Development' }).locator('.max-w-7xl').first();
    const coreServicesBox = await coreServicesContainer.boundingBox();
    expect(coreServicesBox?.width).toBeLessThanOrEqual(1280);
    
    // Check AI Solutions section
    const aiSolutionsContainer = page.locator('section#activity .max-w-7xl');
    const aiSolutionsBox = await aiSolutionsContainer.boundingBox();
    expect(aiSolutionsBox?.width).toBeLessThanOrEqual(1280);
    
    // Check Deployed Systems section
    const deployedContainer = page.locator('section#projects .max-w-7xl');
    const deployedBox = await deployedContainer.boundingBox();
    expect(deployedBox?.width).toBeLessThanOrEqual(1280);
    
    // Verify content is centered (has margins on both sides)
    const viewportWidth = 1920;
    const contentWidth = heroBox?.width || 0;
    const leftMargin = heroBox?.x || 0;
    const rightMargin = viewportWidth - ((heroBox?.x || 0) + contentWidth);
    
    // Margins should be approximately equal
    expect(Math.abs(leftMargin - rightMargin)).toBeLessThan(50);
  });

  test('Very tall viewport', async ({ page }) => {
    // Set viewport to very tall 1920x3000
    await page.setViewportSize({ width: 1920, height: 3000 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Verify all major sections render correctly
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    const coreServicesSection = page.locator('section').filter({ hasText: 'AI Agent Development' }).first();
    await expect(coreServicesSection).toBeVisible();
    
    const aiSolutionsSection = page.locator('section#activity');
    await expect(aiSolutionsSection).toBeVisible();
    
    const deployedSection = page.locator('section#projects');
    await expect(deployedSection).toBeVisible();
    
    const historySection = page.locator('section#history');
    await expect(historySection).toBeVisible();
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Verify layout stability - no overflow or broken layouts
    const body = page.locator('body');
    const bodyBox = await body.boundingBox();
    
    // Body should not have horizontal scrollbar (width should be 1920)
    expect(bodyBox?.width).toBeLessThanOrEqual(1920);
    
    // Verify grid layouts still work correctly
    await coreServicesSection.scrollIntoViewIfNeeded();
    const coreServicesGrid = coreServicesSection.locator('.grid');
    const gridClasses = await coreServicesGrid.getAttribute('class');
    expect(gridClasses).toContain('md:grid-cols-3');
    
    // Verify navigation still works
    const nav = page.locator('nav.md\\:flex');
    await expect(nav).toBeVisible();
    
    // Verify footer is at the bottom
    const footerBox = await footer.boundingBox();
    const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    expect((footerBox?.y || 0) + (footerBox?.height || 0)).toBeGreaterThan(2000);
  });

});
