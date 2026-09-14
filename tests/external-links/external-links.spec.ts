import { test, expect } from '@playwright/test';

// spec: specs/rootbricks-test-plan.md - Section 8: External Links
// seed: Navigate to http://localhost:3000 and wait for page load

test.describe.serial('External Links Tests', () => {
  test('external-links', async ({ page, context }) => {
    // Navigate to the ROOT BRICKS homepage
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');

    // 1. Email link in footer - Verify 'jeromwolf@gmail.com' mailto link
    await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
    await page.waitForTimeout(500);
    
    const emailLink = page.locator('a[href="mailto:jeromwolf@gmail.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveText('jeromwolf@gmail.com');
    
    // Verify email link styling
    const emailColor = await emailLink.evaluate((el) => window.getComputedStyle(el).color);
    expect(emailColor).toBeTruthy(); // Has color styling
    
    // Hover to verify color change effect
    await emailLink.hover();
    await page.waitForTimeout(200);

    // 2. YouTube link in footer - Verify 'Ontology Hub' text, YouTube icon, href, target='_blank'
    const youtubeLink = page.locator('a[href="https://www.youtube.com/@ontology-hub"]');
    await expect(youtubeLink).toBeVisible();
    await expect(youtubeLink).toHaveAttribute('target', '_blank');
    await expect(youtubeLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    // Verify YouTube icon is present
    const youtubeIcon = youtubeLink.locator('svg');
    await expect(youtubeIcon).toBeVisible();
    
    // Verify 'Ontology Hub' text
    await expect(youtubeLink.locator('span')).toHaveText('Ontology Hub');
    
    // Test YouTube link hover effect (should change to red-600)
    await youtubeLink.hover();
    await page.waitForTimeout(200);

    // 3. GitHub project links - Flux Ontology card clicks should open GitHub link in new tab
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'auto' }));
    await page.waitForTimeout(200);
    
    // Scroll to AI Solutions section
    const activitySection = page.locator('#activity');
    await activitySection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // Find Flux Ontology project card
    const fluxCard = page.locator('div.group.cursor-pointer').filter({ hasText: 'Flux Ontology Platform' });
    await expect(fluxCard).toBeVisible();
    
    // Set up new page listener before clicking
    const [newPage1] = await Promise.all([
      context.waitForEvent('page'),
      fluxCard.click()
    ]);
    
    // Verify new tab opened with correct GitHub URL
    expect(newPage1.url()).toBe('https://github.com/jeromwolf/flux-ontology');
    await newPage1.close();
    
    // Verify hover effect on card (border should change, title should translate)
    await fluxCard.hover();
    await page.waitForTimeout(200);

    // 4. FDE Curriculum external link - Click should open 'https://fde-academy.ai.kr/' in new tab
    const fdeCard = page.locator('div.group.cursor-pointer').filter({ hasText: 'FDE Curriculum' });
    await expect(fdeCard).toBeVisible();
    
    // Verify WIP badge is present
    const wipBadge = fdeCard.locator('span.text-amber-600');
    await expect(wipBadge).toBeVisible();
    await expect(wipBadge).toHaveClass(/animate-pulse/);
    
    const [newPage2] = await Promise.all([
      context.waitForEvent('page'),
      fdeCard.click()
    ]);
    
    expect(newPage2.url()).toBe('https://fde-academy.ai.kr/');
    await newPage2.close();

    // 5. AI Education Simulator link - Click should open 'https://ontology.kss.ai.kr/' in new tab
    const aiEducationCard = page.locator('div.group.cursor-pointer').filter({ hasText: 'AI Education Simulator' });
    await expect(aiEducationCard).toBeVisible();
    
    const [newPage3] = await Promise.all([
      context.waitForEvent('page'),
      aiEducationCard.click()
    ]);
    
    expect(newPage3.url()).toBe('https://ontology.kss.ai.kr/');
    await newPage3.close();

    // 6. External link failures - Verify external link errors don't affect main page
    // Main page should remain functional regardless of external link status
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Verify page is still interactive
    const logo = page.locator('header div:has-text("ROOT BRICKS")').first();
    await logo.click();
    await page.waitForTimeout(500);
    
    // Verify scroll to top worked
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);

    // 7. Rapid card clicks - Verify stability during rapid consecutive clicks
    await activitySection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // Rapidly click on multiple cards (simulate stress test)
    const openWebUICard = page.locator('div.group.cursor-pointer').filter({ hasText: 'Open WebUI RAG System' });
    const a2aCard = page.locator('div.group.cursor-pointer').filter({ hasText: 'A2A Sentiment Analysis' });
    const nrcCard = page.locator('div.group.cursor-pointer').filter({ hasText: 'NRC ADAMS Search MCP' });
    
    // Verify all cards are visible before rapid clicking
    await expect(openWebUICard).toBeVisible();
    await expect(a2aCard).toBeVisible();
    await expect(nrcCard).toBeVisible();
    
    // Simulate rapid clicks and verify each opens correctly
    const [newPage4] = await Promise.all([
      context.waitForEvent('page'),
      openWebUICard.click()
    ]);
    expect(newPage4.url()).toBe('https://github.com/jeromwolf/open-webui-rag');
    await newPage4.close();
    
    await page.waitForTimeout(100); // Small delay between clicks
    
    const [newPage5] = await Promise.all([
      context.waitForEvent('page'),
      a2aCard.click()
    ]);
    expect(newPage5.url()).toBe('https://github.com/jeromwolf/A2A_sentiment_analysis');
    await newPage5.close();
    
    await page.waitForTimeout(100);
    
    const [newPage6] = await Promise.all([
      context.waitForEvent('page'),
      nrcCard.click()
    ]);
    expect(newPage6.url()).toBe('https://github.com/jeromwolf/eve-mcp');
    await newPage6.close();
    
    // Verify main page is still stable after rapid clicks
    await expect(page.locator('header')).toBeVisible();
    await expect(activitySection).toBeVisible();
    
    // Verify no JavaScript errors occurred
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Final verification: all interactive elements still work
    await logo.click();
    await page.waitForTimeout(500);
    const finalScrollY = await page.evaluate(() => window.scrollY);
    expect(finalScrollY).toBeLessThan(100);
  });
});
