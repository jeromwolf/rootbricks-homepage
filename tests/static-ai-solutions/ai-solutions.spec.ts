import { test, expect } from '@playwright/test';

test.describe('Static Content - AI Solutions', () => {
  
  test('Section Header', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();

    // Verify 'AI Solutions' heading is visible (h2 with uppercase styling)
    await expect(page.locator('#activity h2')).toContainText('AI Solutions');

    // Verify 'SYNCED WITH GITHUB' text is visible
    await expect(page.getByText('SYNCED WITH GITHUB')).toBeVisible();
  });

  test('Six Projects Grid', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();
    
    // Verify 6 project cards are displayed in grid layout
    const projectCards = page.locator('#activity .grid > div');
    await expect(projectCards).toHaveCount(6);
    
    // Verify grid layout class
    const gridContainer = page.locator('#activity .grid');
    await expect(gridContainer).toHaveClass(/grid-cols-1/);
    await expect(gridContainer).toHaveClass(/md:grid-cols-3/);
  });

  test('Flux Ontology Platform', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();

    // Verify 'Flux Ontology Platform' project title
    await expect(page.getByRole('heading', { name: 'Flux Ontology Platform' })).toBeVisible();

    // Verify description contains SME-focused
    await expect(page.getByText(/SME-focused/)).toBeVisible();

    // Verify 'Ontology / Palantir' tag
    await expect(page.getByText('Ontology / Palantir')).toBeVisible();
  });

  test('Open WebUI RAG System', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();
    
    // Verify 'Open WebUI RAG System' project title
    await expect(page.getByText('Open WebUI RAG System')).toBeVisible();
    
    // Verify 'sLLM based RAG System using GPT-OSS:20B model' description
    await expect(page.getByText('sLLM based RAG System using GPT-OSS:20B model')).toBeVisible();
    
    // Verify 'sLLM / RAG' tag
    await expect(page.getByText('sLLM / RAG')).toBeVisible();
  });

  test('A2A Sentiment Analysis', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();
    
    // Verify 'A2A Sentiment Analysis' project title
    await expect(page.getByText('A2A Sentiment Analysis')).toBeVisible();
    
    // Verify 'AI-powered stock investment solution' description
    await expect(page.getByText('AI-powered stock investment solution')).toBeVisible();
    
    // Verify 'Stock / Finance' tag
    await expect(page.getByText('Stock / Finance')).toBeVisible();
  });

  test('NRC ADAMS Search MCP', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();
    
    // Verify 'NRC ADAMS Search MCP' project title
    await expect(page.getByText('NRC ADAMS Search MCP')).toBeVisible();
    
    // Verify 'NRC ADAMS document search' description
    await expect(page.getByText('NRC ADAMS document search')).toBeVisible();
    
    // Verify 'Claude Desktop' is mentioned in description
    await expect(page.getByText(/Claude Desktop/)).toBeVisible();
    
    // Verify 'MCP Server' tag
    await expect(page.getByText('MCP Server')).toBeVisible();
  });

  test('FDE Curriculum', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();

    // Verify 'FDE Curriculum' project title
    await expect(page.getByRole('heading', { name: 'FDE Curriculum' })).toBeVisible();

    // Verify 'Education' tag (exact match)
    await expect(page.getByText('Education', { exact: true })).toBeVisible();
  });

  test('AI Education Simulator', async ({ page }) => {
    // Navigate to ROOT BRICKS homepage
    await page.goto('http://localhost:3000');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Scroll to AI Solutions section
    await page.locator('#activity').scrollIntoViewIfNeeded();

    // Verify 'AI Education Simulator' project title
    await expect(page.getByRole('heading', { name: 'AI Education Simulator' })).toBeVisible();

    // Verify 'Simulation' tag (exact match)
    await expect(page.getByText('Simulation', { exact: true })).toBeVisible();
  });
});
