// spec: specs/rootbricks-test-plan.md
// Test Suite: Static Content - Timeline

import { test, expect } from '@playwright/test';

test.describe('Static Content - Operational History Timeline', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Section header - OPERATIONAL HISTORY heading', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify section header is visible with uppercase styling
    const heading = page.getByRole('heading', { name: 'Operational History' });
    await expect(heading).toBeVisible();

    // Verify uppercase and tracking-widest styling
    await expect(heading).toHaveClass(/uppercase/);
    await expect(heading).toHaveClass(/tracking-widest/);
  });

  test('Six timeline entries - displayed correctly', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify all 6 timeline entries are displayed
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

  test('2024-PRESENT entry - AI Agent & RAG Architecture', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify period header
    await expect(page.getByText('2024 — PRESENT')).toBeVisible();

    // Verify role/title
    await expect(page.getByText('AI Agent & RAG Architecture')).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/Large Language Models/i)).toBeVisible();
    await expect(page.getByText(/Palantir's ontology/i)).toBeVisible();
  });

  test('2017-2023 entry - CEO, Root Bricks', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify period header
    await expect(page.getByText('2017 — 2023')).toBeVisible();

    // Verify role/title (h3 heading)
    await expect(page.locator('#history h3').filter({ hasText: 'CEO, Root Bricks' })).toBeVisible();
  });

  test('2015-2016 entry - Platform Architect', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify period header
    await expect(page.getByText('2015 — 2016')).toBeVisible();

    // Verify role/title
    await expect(page.getByText('Platform Architect')).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/scalable mobility platforms/i)).toBeVisible();
    await expect(page.getByText(/O2O services/i)).toBeVisible();
  });

  test('2011-2014 entry - Lead, Voice Framework Division', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify period header
    await expect(page.getByText('2011 — 2014')).toBeVisible();

    // Verify role/title (h3 heading)
    await expect(page.locator('#history h3').filter({ hasText: 'Lead, Voice Framework Division' })).toBeVisible();
  });

  test('2005-2010 entry - Embedded System Specialist', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify period header
    await expect(page.getByText('2005 — 2010')).toBeVisible();

    // Verify role/title
    await expect(page.getByText('Embedded System Specialist')).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/Windows CE devices/i)).toBeVisible();
    await expect(page.getByText(/VoIP phones/i)).toBeVisible();
  });

  test('2001-2005 entry - KT Telematics R&D', async ({ page }) => {
    // Scroll to the History section
    await page.locator('#history').scrollIntoViewIfNeeded();

    // Verify period header
    await expect(page.getByText('2001 — 2005')).toBeVisible();

    // Verify role/title
    await expect(page.getByText('KT Telematics R&D')).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/Location Based Services/i)).toBeVisible();
    await expect(page.getByText(/KTMap/i)).toBeVisible();
  });
});
