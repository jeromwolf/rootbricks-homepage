// spec: Animation Tests - Hero Animations
// Test suite for ROOT BRICKS website Hero section animations

import { test, expect } from '@playwright/test';

test.describe.serial('Animation Tests', () => {
  test('hero-animations', async ({ page }) => {
    // Navigate to localhost:3000
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('domcontentloaded');

    // 1. Hero load animations - Verify fade-in animation (opacity 0 -> 1, y: 20 -> 0)
    const heroSection = page.locator('section').first();
    const heroContainer = heroSection.locator('motion.div, div').first();
    
    // Wait for initial animation to complete
    await page.waitForTimeout(1000);
    
    // Verify hero section is visible after animation
    await expect(heroSection).toBeVisible();
    await expect(heroContainer).toBeVisible();

    // 2. Typing animation progressive - Verify 'AI 기반 운영 및 의사결정을 실행하세요.' types character by character
    const heading = page.locator('h1').first();
    
    // Wait for typing to start
    await page.waitForTimeout(500);
    
    // Check that heading is visible
    await expect(heading).toBeVisible();
    
    // Wait for some characters to appear (partial text check during typing)
    await page.waitForTimeout(2000);
    const partialText = await heading.textContent();
    expect(partialText).toBeTruthy();
    expect(partialText!.length).toBeGreaterThan(0);
    
    // 3. Cursor blink animation - Verify cursor blinks (inline-block, black background, opacity animation)
    const cursor = heading.locator('span').last();
    await expect(cursor).toBeVisible();
    
    // Verify cursor has expected styling (inline-block, black background)
    const cursorClass = await cursor.getAttribute('class');
    expect(cursorClass).toContain('inline-block');
    expect(cursorClass).toContain('bg-black');
    
    // 4. Hero subtitle and elements - Verify decoration bar (w-12 h-1), subtitle '데이터를 연결하고 지식을 설계하여'
    const decorationBar = heroSection.locator('div.w-12.h-1.bg-black');
    await expect(decorationBar).toBeVisible();
    
    const subtitle = page.locator('p', { hasText: '데이터를 연결하고 지식을 설계하여' });
    await expect(subtitle).toBeVisible();
    
    // Verify subtitle contains expected text
    const subtitleText = await subtitle.textContent();
    expect(subtitleText).toContain('데이터를 연결하고 지식을 설계하여');
    expect(subtitleText).toContain('비즈니스의 본질적인 가치를 발견합니다');
    
    // 5. Typing animation completion - Verify full text completion, cursor continues blinking
    // Wait for typing animation to complete (approximately 80ms * 25 characters = ~2000ms + buffer)
    await page.waitForTimeout(4000);
    
    const finalText = await heading.textContent();
    expect(finalText).toContain('AI 기반 운영 및 의사결정을 실행하세요.');
    
    // Verify cursor is still present and blinking after completion
    await expect(cursor).toBeVisible();
    
    // Take multiple snapshots to verify cursor blink animation continues
    const opacity1 = await cursor.evaluate((el) => window.getComputedStyle(el).opacity);
    await page.waitForTimeout(400); // Half of the 0.8s blink cycle
    const opacity2 = await cursor.evaluate((el) => window.getComputedStyle(el).opacity);
    
    // Opacity should change between snapshots due to blink animation
    expect(opacity1).not.toBe(opacity2);
  });
});
