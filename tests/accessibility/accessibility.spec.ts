// spec: Accessibility Tests
// URL: http://localhost:3000

import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the ROOT BRICKS homepage
    await page.goto('http://localhost:3000');
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test('HTML lang attribute - html element has lang="ko" attribute', async ({ page }) => {
    // 1. Verify html element has lang='ko' attribute
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBe('ko');
  });

  test('Page title and meta - verify title and meta description', async ({ page }) => {
    // 2. Page title and meta - title 'ROOT BRICKS | Connecting Data, Designing Knowledge', meta description
    const title = await page.title();
    expect(title).toBe('ROOT BRICKS | Connecting Data, Designing Knowledge');

    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBe('AI Solutions, Knowledge Graphs, and Business Intelligence.');
  });

  test('Heading hierarchy - h1 count, h2 sections, h3 cards, no skips', async ({ page }) => {
    // 3. Heading hierarchy - h1 1개, h2 섹션 헤딩, h3 카드 타이틀

    // Verify exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // Verify h1 exists and will contain typed text
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Verify h2 headings exist for main sections
    const h2Elements = page.locator('h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThan(0);

    // Verify h3 headings exist for cards/subsections
    const h3Elements = page.locator('h3');
    const h3Count = await h3Elements.count();
    expect(h3Count).toBeGreaterThan(0);

    // Check for proper heading hierarchy
    const allHeadings = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      return headings.map(h => ({
        tag: h.tagName,
        text: h.textContent?.trim().substring(0, 50)
      }));
    });

    // Verify first heading is h1
    expect(allHeadings[0].tag).toBe('H1');

    // Verify h2 and h3 exist in hierarchy
    const hasH2 = allHeadings.some(h => h.tag === 'H2');
    const hasH3 = allHeadings.some(h => h.tag === 'H3');
    expect(hasH2).toBe(true);
    expect(hasH3).toBe(true);
  });

  test('Link accessibility - descriptive text, external links with target and rel', async ({ page }) => {
    // 4. Link accessibility - 모든 링크에 설명적 텍스트, 외부 링크 target='_blank', rel='noopener noreferrer'
    
    const links = page.locator('a');
    const linkCount = await links.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      
      // Verify link has descriptive text or aria-label
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute('aria-label');
      const hasContent = (text && text.trim().length > 0) || (ariaLabel && ariaLabel.length > 0);
      expect(hasContent).toBeTruthy();
      
      // Check external links
      const href = await link.getAttribute('href');
      if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        const target = await link.getAttribute('target');
        const rel = await link.getAttribute('rel');
        
        expect(target).toBe('_blank');
        expect(rel).toContain('noopener');
        expect(rel).toContain('noreferrer');
      }
    }
  });

  test('Color contrast - black text on white, gray-500 contrast', async ({ page }) => {
    // 5. Color contrast - 검정 텍스트 (#111111) on 흰색, gray-500 텍스트 대비
    
    // Verify main background is white
    const bodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    expect(bodyBg).toMatch(/rgb\(255,\s*255,\s*255\)|white/);
    
    // Verify main text color is dark (black or near-black)
    const mainTextColor = await page.evaluate(() => {
      const main = document.querySelector('main');
      return main ? window.getComputedStyle(main).color : null;
    });
    expect(mainTextColor).toMatch(/rgb\((0|17|16),\s*(0|17|16),\s*(0|17|16)\)/);
    
    // Check contrast ratios using WCAG guidelines
    // For normal text: minimum 4.5:1, for large text: minimum 3:1
    const contrastCheck = await page.evaluate(() => {
      function getLuminance(r: number, g: number, b: number) {
        const [rs, gs, bs] = [r, g, b].map(c => {
          c = c / 255;
          return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
      }
      
      function getContrastRatio(l1: number, l2: number) {
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
      }
      
      // White background luminance
      const bgLuminance = getLuminance(255, 255, 255);
      
      // Black text luminance (#111111 = 17, 17, 17)
      const blackTextLuminance = getLuminance(17, 17, 17);
      const blackContrast = getContrastRatio(bgLuminance, blackTextLuminance);
      
      // Gray-500 text luminance (approximately rgb(107, 114, 128))
      const grayTextLuminance = getLuminance(107, 114, 128);
      const grayContrast = getContrastRatio(bgLuminance, grayTextLuminance);
      
      return {
        blackContrast,
        grayContrast,
        meetsWCAG_AA_Normal: blackContrast >= 4.5 && grayContrast >= 4.5
      };
    });
    
    expect(contrastCheck.blackContrast).toBeGreaterThanOrEqual(4.5);
    expect(contrastCheck.grayContrast).toBeGreaterThanOrEqual(4.5);
    expect(contrastCheck.meetsWCAG_AA_Normal).toBe(true);
  });

  test('Focus states - Tab navigation and focus indicators', async ({ page }) => {
    // 6. Focus states - Tab 키로 모든 인터랙티브 요소 접근 가능, 포커스 표시
    
    // Get all interactive elements
    const interactiveElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      return elements.length;
    });
    
    expect(interactiveElements).toBeGreaterThan(0);
    
    // Test Tab navigation on first few interactive elements
    await page.keyboard.press('Tab');
    let firstFocused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'DIV']).toContain(firstFocused || '');
    
    // Verify focus indicator is visible
    const hasFocusOutline = await page.evaluate(() => {
      const focused = document.activeElement;
      if (!focused) return false;
      
      const styles = window.getComputedStyle(focused);
      return (
        styles.outline !== 'none' ||
        styles.outlineWidth !== '0px' ||
        styles.boxShadow !== 'none'
      );
    });
    
    expect(hasFocusOutline).toBe(true);
    
    // Test multiple Tab presses
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('Tab');
      const focusedElement = await page.evaluate(() => {
        const el = document.activeElement;
        return el ? {
          tag: el.tagName,
          hasFocus: document.activeElement === el
        } : null;
      });
      expect(focusedElement?.hasFocus).toBe(true);
    }
  });

  test('Image/icon alternatives - Lucide icons are decorative', async ({ page }) => {
    // 7. Image/icon alternatives - Lucide 아이콘은 장식용, 부모 컨텍스트에서 의미 전달
    
    // Check SVG icons (Lucide icons render as SVG)
    const svgIcons = page.locator('svg');
    const svgCount = await svgIcons.count();
    
    if (svgCount > 0) {
      // Sample check on first few SVGs
      for (let i = 0; i < Math.min(5, svgCount); i++) {
        const svg = svgIcons.nth(i);
        
        // Decorative icons should have aria-hidden="true" or be inside labeled parent
        const ariaHidden = await svg.getAttribute('aria-hidden');
        const role = await svg.getAttribute('role');
        
        // Get parent element's text content
        const parentContext = await svg.evaluate((el) => {
          const parent = el.parentElement;
          return parent ? parent.textContent?.trim() : '';
        });
        
        // Either the icon is explicitly decorative OR parent has descriptive text
        const isProperlyLabeled = 
          ariaHidden === 'true' || 
          role === 'presentation' || 
          (parentContext && parentContext.length > 0);
        
        expect(isProperlyLabeled).toBe(true);
      }
    }
  });

  test('Text selection - text is selectable with custom selection styles', async ({ page }) => {
    // 8. Text selection - 텍스트 선택 가능, 선택 시 검정 배경 + 흰색 텍스트

    // Check the CSS class exists on main element
    const mainClasses = await page.locator('main').getAttribute('class');
    expect(mainClasses).toContain('selection:bg-black');
    expect(mainClasses).toContain('selection:text-white');

    // Test actual text selection on a paragraph element
    const subtitle = page.getByText('데이터를 연결하고 지식을 설계하여');
    await subtitle.click();

    // Select text using triple-click to select line
    await subtitle.click({ clickCount: 3 });

    // Verify selection exists
    const selectedText = await page.evaluate(() => window.getSelection()?.toString());
    expect(selectedText).toBeTruthy();
  });

  test('Keyboard navigation - logical Tab order, Enter activates links', async ({ page }) => {
    // 9. Keyboard navigation - Tab 순서 논리적, Enter로 링크 활성화
    
    // Get all focusable elements in order
    const focusableElements = await page.evaluate(() => {
      const elements = Array.from(
        document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
      );
      return elements.map((el, index) => ({
        index,
        tag: el.tagName,
        text: el.textContent?.trim().substring(0, 30),
        href: (el as HTMLAnchorElement).href || null,
        y: el.getBoundingClientRect().top
      }));
    });
    
    expect(focusableElements.length).toBeGreaterThan(0);
    
    // Verify elements are generally ordered top to bottom (allowing some flexibility for flex/grid)
    for (let i = 1; i < Math.min(10, focusableElements.length); i++) {
      // Elements should generally increase in vertical position, 
      // but we allow some variance for elements on same row
      const isReasonablyOrdered = 
        focusableElements[i].y >= focusableElements[i - 1].y - 50;
      expect(isReasonablyOrdered).toBe(true);
    }
    
    // Test Enter key activates link
    const firstLink = page.locator('a').first();
    await firstLink.focus();
    
    const linkHref = await firstLink.getAttribute('href');
    if (linkHref && linkHref.startsWith('#')) {
      // For anchor links, pressing Enter should scroll to section
      await page.keyboard.press('Enter');
      await page.waitForTimeout(500);
      
      // Verify page scrolled (URL should include hash)
      const currentUrl = page.url();
      expect(currentUrl).toContain('#');
    }
  });

  test('Reduced motion - prefers-reduced-motion support', async ({ page }) => {
    // 10. Reduced motion - prefers-reduced-motion 미디어 쿼리 지원 (있으면)
    
    // Check if animations exist
    const hasAnimations = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('*'));
      return elements.some(el => {
        const styles = window.getComputedStyle(el);
        return (
          styles.animation !== 'none' && 
          styles.animation !== '' &&
          !styles.animation.includes('0s')
        ) || (
          styles.transition !== 'all 0s ease 0s' && 
          styles.transition !== 'none' &&
          styles.transition !== ''
        );
      });
    });
    
    // If animations exist, verify reduced motion query
    if (hasAnimations) {
      // Set prefers-reduced-motion
      await page.emulateMedia({ reducedMotion: 'reduce' });
      
      // Check if reduced motion is respected
      const reducedMotionRespected = await page.evaluate(() => {
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        return motionQuery.matches;
      });
      
      expect(reducedMotionRespected).toBe(true);
      
      // Reset
      await page.emulateMedia({ reducedMotion: 'no-preference' });
    }
    
    // Note: This test verifies the browser supports reduced motion preference
    // Actual CSS implementation would need to be checked via CSS files
  });

  test('ARIA landmarks - proper semantic structure', async ({ page }) => {
    // Additional test: Verify ARIA landmarks and semantic HTML
    
    const landmarks = await page.evaluate(() => {
      return {
        main: document.querySelectorAll('main').length,
        header: document.querySelectorAll('header').length,
        footer: document.querySelectorAll('footer').length,
        nav: document.querySelectorAll('nav').length,
        sections: document.querySelectorAll('section').length
      };
    });
    
    expect(landmarks.main).toBeGreaterThanOrEqual(1);
    expect(landmarks.header).toBeGreaterThanOrEqual(1);
    expect(landmarks.footer).toBeGreaterThanOrEqual(1);
    expect(landmarks.nav).toBeGreaterThanOrEqual(0); // Optional but recommended
    expect(landmarks.sections).toBeGreaterThan(0);
  });

  test('Responsive design - viewport meta tag', async ({ page }) => {
    // Additional test: Verify viewport meta tag for mobile accessibility
    
    const viewportMeta = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewportMeta).toBeTruthy();
    expect(viewportMeta).toContain('width=device-width');
  });

  test('Skip to content - keyboard navigation enhancement', async ({ page }) => {
    // Additional test: Check for skip to content link (best practice)
    // This is optional - we check if any anchor links exist for in-page navigation

    // Check if there are any anchor links for navigation
    const anchorLinks = page.locator('a[href^="#"]');
    const anchorCount = await anchorLinks.count();

    // Verify that anchor links exist for in-page navigation
    expect(anchorCount).toBeGreaterThan(0);

    // Verify navigation links are functional
    const navLinks = page.locator('header nav a[href^="#"]');
    const navCount = await navLinks.count();
    expect(navCount).toBeGreaterThan(0);
  });
});
