import { test, expect } from '@playwright/test'

test.describe('Homepage Tests', () => {
  test('should load homepage with correct title and hero content', async ({ page }) => {
    await page.goto('/')
    
    // Check page title
    await expect(page).toHaveTitle(/Prashantam Yoga - Yoga for Stress Relief, Inner Peace & Mental Wellness/)
    
    // Check hero section
    await expect(page.locator('h1')).toContainText('Yoga for Stress Relief, Inner Peace, and Mental Wellness')
    
    // Check main CTA button
    const joinClassButton = page.locator('text=Join a Class').first()
    await expect(joinClassButton).toBeVisible()
    await expect(joinClassButton).toBeEnabled()
    
    // Check hero description
    await expect(page.locator('text=Transform your mental health with therapeutic yoga')).toBeVisible()
  })

  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/')
    
    // Check navigation is visible
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
    
    // Check all navigation links are present
    await expect(page.locator('nav >> text=Home')).toBeVisible()
    await expect(page.locator('nav >> text=About')).toBeVisible()
    await expect(page.locator('nav >> text=Classes')).toBeVisible()
    await expect(page.locator('nav >> text=Workshops')).toBeVisible()
    await expect(page.locator('nav >> text=Testimonials')).toBeVisible()
    await expect(page.locator('nav >> text=Blog')).toBeVisible()
    await expect(page.locator('nav >> text=Contact')).toBeVisible()
  })

  test('should display features section with therapeutic benefits', async ({ page }) => {
    await page.goto('/')
    
    // Check features section
    await expect(page.locator('text=Why Choose Therapeutic Yoga')).toBeVisible()
    
    // Check key features
    await expect(page.locator('text=Stress & Anxiety Relief')).toBeVisible()
    await expect(page.locator('text=Burnout Recovery')).toBeVisible()
    await expect(page.locator('text=Mental Health Support')).toBeVisible()
    await expect(page.locator('text=Better Sleep Quality')).toBeVisible()
    
    // Check stats section
    await expect(page.locator('text=3+')).toBeVisible()
    await expect(page.locator('text=Years Teaching')).toBeVisible()
    await expect(page.locator('text=500+')).toBeVisible()
    await expect(page.locator('text=Students Helped')).toBeVisible()
  })

  test('should have WhatsApp button with correct functionality', async ({ page }) => {
    await page.goto('/')
    
    // Wait for WhatsApp button to appear (it has a delay)
    const whatsappButton = page.locator('[aria-label="Chat on WhatsApp"]')
    await expect(whatsappButton).toBeVisible({ timeout: 5000 })
    
    // Check tooltip on hover
    await whatsappButton.hover()
    await expect(page.locator('text=Chat with us on WhatsApp')).toBeVisible()
  })

  test('should display testimonials section', async ({ page }) => {
    await page.goto('/')
    
    // Check testimonials section
    await expect(page.locator('text=What Our Students Say')).toBeVisible()
    
    // Check at least one testimonial is visible
    const testimonials = page.locator('[data-testid="testimonial"]')
    await expect(testimonials.first()).toBeVisible()
  })

  test('should have newsletter signup', async ({ page }) => {
    await page.goto('/')
    
    // Check newsletter section
    await expect(page.locator('text=Stay Connected')).toBeVisible()
    await expect(page.locator('text=Subscribe to our newsletter')).toBeVisible()
    
    // Check newsletter form
    const emailInput = page.locator('input[type="email"]')
    await expect(emailInput).toBeVisible()
    
    const subscribeButton = page.locator('text=Subscribe')
    await expect(subscribeButton).toBeVisible()
  })

  test('should have footer with contact information', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded()
    
    // Check footer content
    await expect(page.locator('footer >> text=Prashantam Yoga')).toBeVisible()
    await expect(page.locator('footer >> text=Pune, Maharashtra')).toBeVisible()
    
    // Check social links or contact info
    await expect(page.locator('footer >> text=Contact')).toBeVisible()
  })
})