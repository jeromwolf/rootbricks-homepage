// spec: specs/rootbricks-test-plan.md
// Test Suite: Static Content - Deployed Systems

import { test, expect } from '@playwright/test';

test.describe('Static Content - Deployed Systems', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Section header - Deployed Systems heading and subtitle', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify section header
    await expect(page.getByRole('heading', { name: 'Deployed Systems', level: 2 })).toBeVisible();

    // Verify subtitle
    await expect(page.getByText('Enterprise-grade solutions delivered.')).toBeVisible();
  });

  test('Six system cards - grid layout display', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify exactly 6 system cards are displayed
    const cards = page.locator('#projects').getByRole('heading', { level: 3 });
    await expect(cards).toHaveCount(6);

    // Verify grid layout (3 columns on large screens)
    const gridContainer = page.locator('#projects .grid');
    await expect(gridContainer).toHaveClass(/lg:grid-cols-3/);
  });

  test('KB Kookmin Card AI Chatbot - Brain icon and details', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify card title
    await expect(page.getByRole('heading', { name: 'KB Kookmin Card AI Chatbot' })).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/23M users/i)).toBeVisible();
    await expect(page.getByText(/Enterprise AI conversational agent/i)).toBeVisible();

    // Verify tech stack badges
    await expect(page.getByText('Java Spring', { exact: true })).toBeVisible();
    await expect(page.getByText('Oracle', { exact: true })).toBeVisible();
    await expect(page.getByText('MyBatis', { exact: true })).toBeVisible();
  });

  test('VoCom Voice Framework - Activity icon and details', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify card title
    await expect(page.getByRole('heading', { name: 'VoCom Voice Framework' })).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/distributed voice recognition/i)).toBeVisible();

    // Verify tech stack badges
    await expect(page.locator('#projects').getByText('C++', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Windows', { exact: true })).toBeVisible();
    await expect(page.getByText('Voice Rec', { exact: true })).toBeVisible();
  });

  test('Mobility Platform - Smartphone icon and details', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify card title
    await expect(page.getByRole('heading', { name: 'Mobility Platform' })).toBeVisible();

    // Verify tech stack badges
    await expect(page.locator('#projects').getByText('PHP', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Firebase', { exact: true })).toBeVisible();
  });

  test('Olive Healthcare - Activity icon and details', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify card title
    await expect(page.getByRole('heading', { name: 'Olive Healthcare' })).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/Cross-border e-commerce/i)).toBeVisible();

    // Verify tech stack badges
    await expect(page.locator('#projects').getByText('PHP', { exact: true }).nth(1)).toBeVisible();
    await expect(page.getByText('PayPal', { exact: true })).toBeVisible();
  });

  test('Smart Monitoring - Zap icon and details', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify card title
    await expect(page.getByRole('heading', { name: 'Smart Monitoring' })).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/FFT frequency analysis/i)).toBeVisible();
    await expect(page.getByText(/computer vision/i)).toBeVisible();

    // Verify tech stack badges
    await expect(page.getByText('OpenCV', { exact: true })).toBeVisible();
    await expect(page.getByText('Bluetooth', { exact: true })).toBeVisible();
    await expect(page.getByText('FFT', { exact: true })).toBeVisible();
  });

  test('Radar Computer - Radio icon and details', async ({ page }) => {
    // Scroll to the Deployed Systems section
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify card title
    await expect(page.getByRole('heading', { name: 'Radar Computer' })).toBeVisible();

    // Verify description contains key details
    await expect(page.getByText(/Mission-critical/i)).toBeVisible();

    // Verify tech stack badges
    await expect(page.locator('#projects').getByText('C++', { exact: true }).nth(1)).toBeVisible();
    await expect(page.getByText('TCP/IP', { exact: true })).toBeVisible();
    await expect(page.getByText('Real-time', { exact: true })).toBeVisible();
  });
});
