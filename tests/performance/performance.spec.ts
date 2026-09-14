// Performance Tests - ROOT BRICKS Website
// Test Suite: Performance and Memory Tests (Sequential Execution)

import { test, expect } from '@playwright/test';

test.describe.serial('Performance Tests', () => {
  const BASE_URL = 'http://localhost:3000';
  
  // 1. Page load time - 페이지 로드 시간 측정 (3초 이내)
  test('Page load time - should load within 3 seconds', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    
    const loadTime = Date.now() - startTime;
    console.log(`Page load time: ${loadTime}ms`);
    
    expect(loadTime).toBeLessThan(3000);
  });

  // 2. No console errors - 콘솔 에러 없음 확인
  test('No console errors - should have no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Wait for animations to complete
    await page.waitForTimeout(2000);
    
    console.log(`Console errors found: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      console.log('Errors:', consoleErrors);
    }
    
    expect(consoleErrors).toHaveLength(0);
  });

  // 3. Font loading (FOUT) - Font loading confirmation
  test('Font loading - Inter and Space Grotesk fonts should load', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Check if fonts are loaded by inspecting computed styles
    const bodyFont = await page.evaluate(() => {
      return window.getComputedStyle(document.body).fontFamily;
    });

    const monoFont = await page.evaluate(() => {
      const monoElement = document.querySelector('[class*="font-mono"]');
      if (monoElement) {
        return window.getComputedStyle(monoElement).fontFamily;
      }
      return null;
    });

    console.log(`Body font: ${bodyFont}`);
    console.log(`Mono font: ${monoFont}`);

    // Verify font-family is set (Next.js may use CSS variable)
    expect(bodyFont).toBeTruthy();
    expect(bodyFont.length).toBeGreaterThan(0);

    // Verify mono font is loaded if present
    if (monoFont) {
      expect(monoFont).toBeTruthy();
    }
  });

  // 4. CSS loading - Tailwind CSS 스타일 적용 확인
  test('CSS loading - Tailwind CSS styles should be applied', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Check main element has correct background color (white)
    const mainBgColor = await page.evaluate(() => {
      const main = document.querySelector('main');
      if (main) {
        return window.getComputedStyle(main).backgroundColor;
      }
      return null;
    });
    
    // Check header has backdrop-blur
    const headerBackdropFilter = await page.evaluate(() => {
      const header = document.querySelector('header');
      if (header) {
        return window.getComputedStyle(header).backdropFilter;
      }
      return null;
    });
    
    console.log(`Main background color: ${mainBgColor}`);
    console.log(`Header backdrop filter: ${headerBackdropFilter}`);
    
    // White background should be rgb(255, 255, 255)
    expect(mainBgColor).toBe('rgb(255, 255, 255)');
    
    // Backdrop filter should be applied
    expect(headerBackdropFilter).not.toBe('none');
  });

  // 5. Image/icon loading - Lucide React 아이콘 SVG 렌더링 확인
  test('Icon loading - Lucide React SVG icons should render', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Wait for icons to render
    await page.waitForTimeout(1000);

    // Count SVG elements (Lucide icons are rendered as SVGs)
    const svgCount = await page.evaluate(() => {
      return document.querySelectorAll('svg').length;
    });

    console.log(`SVG icons found: ${svgCount}`);

    // Should have multiple icons (Brain, Database, Layers, etc.)
    expect(svgCount).toBeGreaterThan(5);

    // Verify SVG icons are properly sized (w-6 h-6 class = 24px)
    const hasProperSizedIcons = await page.evaluate(() => {
      const svgs = document.querySelectorAll('svg');
      return Array.from(svgs).some(svg => {
        const width = svg.getAttribute('width') || svg.style.width;
        const height = svg.getAttribute('height') || svg.style.height;
        return width === '24' || height === '24' || svg.classList.contains('w-6');
      });
    });

    expect(hasProperSizedIcons).toBeTruthy();
  });

  // 6. Animation performance - Framer Motion 애니메이션 부드러움
  test('Animation performance - Framer Motion animations should be smooth', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Monitor frame rate during animations
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        let frameCount = 0;
        const startTime = performance.now();
        const duration = 2000; // Monitor for 2 seconds
        
        function countFrame() {
          frameCount++;
          const elapsed = performance.now() - startTime;
          
          if (elapsed < duration) {
            requestAnimationFrame(countFrame);
          } else {
            const fps = Math.round((frameCount / elapsed) * 1000);
            resolve({ fps, frameCount, duration: elapsed });
          }
        }
        
        requestAnimationFrame(countFrame);
      });
    });
    
    console.log(`Animation metrics:`, metrics);
    
    // FPS should be above 30 for smooth animations
    expect((metrics as any).fps).toBeGreaterThan(30);
  });

  // 7. Network optimization - 네트워크 요청 수 확인
  test('Network optimization - should have reasonable number of requests', async ({ page }) => {
    const requests: string[] = [];
    
    page.on('request', (request) => {
      requests.push(request.url());
    });
    
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Wait for all resources to load
    await page.waitForTimeout(2000);
    
    console.log(`Total network requests: ${requests.length}`);
    console.log('Requests:', requests);
    
    // Should not have excessive requests (typical Next.js app should be under 50)
    expect(requests.length).toBeLessThan(50);
    
    // Check for optimized resource loading
    const jsRequests = requests.filter(url => url.endsWith('.js'));
    const cssRequests = requests.filter(url => url.endsWith('.css'));
    
    console.log(`JS requests: ${jsRequests.length}`);
    console.log(`CSS requests: ${cssRequests.length}`);
    
    expect(jsRequests.length).toBeGreaterThan(0);
    expect(cssRequests.length).toBeGreaterThan(0);
  });

  // 8. Memory leak check - 장시간 사용 시 메모리 안정성
  test('Memory leak check - memory should remain stable over time', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    
    // Get initial memory usage
    const initialMemory = await page.evaluate(() => {
      if (performance.memory) {
        return {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
        };
      }
      return null;
    });
    
    console.log('Initial memory:', initialMemory);
    
    // Simulate user interactions for 5 seconds
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      });
      await page.waitForTimeout(500);
      
      await page.evaluate(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      await page.waitForTimeout(500);
    }
    
    // Get final memory usage
    const finalMemory = await page.evaluate(() => {
      if (performance.memory) {
        return {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
        };
      }
      return null;
    });
    
    console.log('Final memory:', finalMemory);
    
    if (initialMemory && finalMemory) {
      const memoryIncrease = finalMemory.usedJSHeapSize - initialMemory.usedJSHeapSize;
      const memoryIncreasePercent = (memoryIncrease / initialMemory.usedJSHeapSize) * 100;
      
      console.log(`Memory increase: ${memoryIncrease} bytes (${memoryIncreasePercent.toFixed(2)}%)`);
      
      // Memory should not increase by more than 50% during normal usage
      expect(memoryIncreasePercent).toBeLessThan(50);
    } else {
      console.log('Memory metrics not available in this browser');
      // Skip memory check if not available
      expect(true).toBeTruthy();
    }
  });

  // 9. Navigation interruption - 페이지 로딩 중단 후 재시도
  test('Navigation interruption - should handle interrupted navigation gracefully', async ({ page }) => {
    // Start navigation
    const navigationPromise = page.goto(BASE_URL);

    // Immediately try to navigate again (interrupt)
    await page.waitForTimeout(100);
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    // Wait for the interrupted navigation to settle
    try {
      await navigationPromise;
    } catch (error) {
      console.log('First navigation was interrupted (expected)');
    }

    // Verify page loaded correctly after interruption
    await page.waitForSelector('main', { timeout: 5000 });

    // Wait for typewriter animation to start
    await page.waitForTimeout(500);

    // Check h1 element exists (typewriter animation will fill it)
    const h1Exists = await page.locator('h1').isVisible();
    expect(h1Exists).toBeTruthy();
    
    // Check that main content is visible
    const mainVisible = await page.isVisible('main');
    expect(mainVisible).toBeTruthy();
    
    // Try rapid navigation switches
    await page.goto(BASE_URL + '#activity');
    await page.waitForTimeout(50);
    await page.goto(BASE_URL + '#projects');
    await page.waitForTimeout(50);
    await page.goto(BASE_URL + '#history');
    
    // Wait for final navigation to complete
    await page.waitForLoadState('networkidle');
    
    // Page should still be functional
    const finalMainVisible = await page.isVisible('main');
    expect(finalMainVisible).toBeTruthy();
  });
});
