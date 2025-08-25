import { test, expect } from '@playwright/test'

test.describe('Navigation Tests', () => {
  test('should navigate to About page', async ({ page }) => {
    await page.goto('/')
    
    await page.locator('nav >> text=About').click()
    await page.waitForURL('**/about')
    
    // Check About page content
    await expect(page.locator('h1')).toContainText('About Prashant Madane')
    await expect(page.locator('text=28 years old')).toBeVisible()
    await expect(page.locator('text=3+ years teaching experience')).toBeVisible()
    await expect(page.locator('text=therapeutic yoga')).toBeVisible()
  })

  test('should navigate to Classes page', async ({ page }) => {
    await page.goto('/')
    
    await page.locator('nav >> text=Classes').click()
    await page.waitForURL('**/classes')
    
    // Check Classes page content
    await expect(page.locator('h1')).toContainText('Classes & Programs')
    await expect(page.locator('text=Stress Management Yoga')).toBeVisible()
    await expect(page.locator('text=Burnout Recovery')).toBeVisible()
    await expect(page.locator('text=Morning Yoga')).toBeVisible()
    await expect(page.locator('text=Yoga Nidra')).toBeVisible()
    
    // Check for CTA buttons
    const ctaButtons = page.locator('text=Book Now')
    await expect(ctaButtons.first()).toBeVisible()
  })

  test('should navigate to Workshops page', async ({ page }) => {
    await page.goto('/')
    
    await page.locator('nav >> text=Workshops').click()
    await page.waitForURL('**/workshops')
    
    // Check Workshops page content
    await expect(page.locator('h1')).toContainText('Workshops & Retreats')
    await expect(page.locator('text=3-day online burnout recovery workshop')).toBeVisible()
    await expect(page.locator('text=natural wellness retreat')).toBeVisible()
  })

  test('should navigate to Testimonials page', async ({ page }) => {
    await page.goto('/')
    
    await page.locator('nav >> text=Testimonials').click()
    await page.waitForURL('**/testimonials')
    
    // Check Testimonials page content
    await expect(page.locator('h1')).toContainText('Student Testimonials')
    
    // Check for testimonial cards
    const testimonials = page.locator('[data-testid="testimonial"]')
    await expect(testimonials.first()).toBeVisible()
  })

  test('should navigate to Blog page', async ({ page }) => {
    await page.goto('/')
    
    await page.locator('nav >> text=Blog').click()
    await page.waitForURL('**/blog')
    
    // Check Blog page content
    await expect(page.locator('h1')).toContainText('Blog & Resources')
    await expect(page.locator('text=yoga')).toBeVisible()
    await expect(page.locator('text=stress management')).toBeVisible()
    await expect(page.locator('text=mental health')).toBeVisible()
  })

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/')
    
    await page.locator('nav >> text=Contact').click()
    await page.waitForURL('**/contact')
    
    // Check Contact page content
    await expect(page.locator('h1')).toContainText('Contact & Registration')
    
    // Check contact form
    await expect(page.locator('input[name="name"]')).toBeVisible()
    await expect(page.locator('input[name="email"]')).toBeVisible()
    await expect(page.locator('textarea[name="message"]')).toBeVisible()
    
    // Check WhatsApp integration
    await expect(page.locator('text=WhatsApp')).toBeVisible()
  })

  test('should return to homepage from any page', async ({ page }) => {
    await page.goto('/about')
    
    // Click logo or Home link to return
    await page.locator('nav >> text=Home').click()
    await page.waitForURL('/')
    
    // Verify we're back on homepage
    await expect(page.locator('h1')).toContainText('Yoga for Stress Relief, Inner Peace, and Mental Wellness')
  })

  test('should have working mobile navigation', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Check if mobile menu toggle is visible
    const mobileMenuToggle = page.locator('[aria-label="Toggle mobile menu"]')
    if (await mobileMenuToggle.isVisible()) {
      await mobileMenuToggle.click()
      
      // Check navigation links in mobile menu
      await expect(page.locator('text=Home')).toBeVisible()
      await expect(page.locator('text=About')).toBeVisible()
      await expect(page.locator('text=Classes')).toBeVisible()
    }
  })
})