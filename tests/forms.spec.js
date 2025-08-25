import { test, expect } from '@playwright/test'

test.describe('Forms and Interactions', () => {
  test('should validate contact form', async ({ page }) => {
    await page.goto('/contact')
    
    const nameInput = page.locator('input[name="name"]')
    const emailInput = page.locator('input[name="email"]')
    const messageInput = page.locator('textarea[name="message"]')
    const submitButton = page.locator('button[type="submit"]')
    
    // Test empty form submission
    await submitButton.click()
    
    // Check for validation messages
    await expect(page.locator('text=required')).toBeVisible()
    
    // Test invalid email
    await nameInput.fill('John Doe')
    await emailInput.fill('invalid-email')
    await messageInput.fill('Test message')
    await submitButton.click()
    
    // Should show email validation error
    await expect(emailInput).toHaveAttribute('type', 'email')
    
    // Test valid form submission
    await emailInput.fill('john@example.com')
    await submitButton.click()
    
    // Should show success message
    await expect(page.locator('text=Thank you')).toBeVisible({ timeout: 10000 })
  })

  test('should validate newsletter signup', async ({ page }) => {
    await page.goto('/')
    
    const emailInput = page.locator('input[type="email"]').last()
    const subscribeButton = page.locator('text=Subscribe').last()
    
    // Test empty email
    await subscribeButton.click()
    
    // Test invalid email
    await emailInput.fill('invalid-email')
    await subscribeButton.click()
    
    // Test valid email
    await emailInput.fill('test@example.com')
    await subscribeButton.click()
    
    // Should show success message
    await expect(page.locator('text=subscribed')).toBeVisible({ timeout: 5000 })
  })

  test('should open WhatsApp link correctly', async ({ page }) => {
    await page.goto('/')
    
    // Wait for WhatsApp button
    const whatsappButton = page.locator('[aria-label="Chat on WhatsApp"]')
    await expect(whatsappButton).toBeVisible({ timeout: 5000 })
    
    // Test WhatsApp link
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      whatsappButton.click()
    ])
    
    // Check that WhatsApp URL is opened
    const url = newPage.url()
    expect(url).toContain('wa.me')
    expect(url).toContain('text=')
    
    await newPage.close()
  })

  test('should handle class booking CTAs', async ({ page }) => {
    await page.goto('/classes')
    
    // Find and click a "Book Now" button
    const bookNowButton = page.locator('text=Book Now').first()
    await expect(bookNowButton).toBeVisible()
    
    await bookNowButton.click()
    
    // Should either:
    // 1. Open booking form/modal
    // 2. Redirect to booking page
    // 3. Open external booking link
    
    // Check for booking form or redirect
    const hasBookingForm = await page.locator('form').count() > 0
    const hasBookingModal = await page.locator('[role="dialog"]').count() > 0
    const currentUrl = page.url()
    
    expect(hasBookingForm || hasBookingModal || currentUrl.includes('book')).toBeTruthy()
  })

  test('should handle workshop registration', async ({ page }) => {
    await page.goto('/workshops')
    
    // Look for registration buttons
    const registerButton = page.locator('text=Register Now').first()
    
    if (await registerButton.isVisible()) {
      await registerButton.click()
      
      // Should handle registration process
      const currentUrl = page.url()
      const hasForm = await page.locator('form').count() > 0
      
      expect(hasForm || currentUrl.includes('register')).toBeTruthy()
    }
  })

  test('should have working search functionality if present', async ({ page }) => {
    await page.goto('/blog')
    
    // Check if search exists
    const searchInput = page.locator('input[placeholder*="Search"]')
    
    if (await searchInput.isVisible()) {
      await searchInput.fill('stress')
      await page.keyboard.press('Enter')
      
      // Should filter or search results
      await expect(page.locator('text=stress')).toBeVisible()
    }
  })
})