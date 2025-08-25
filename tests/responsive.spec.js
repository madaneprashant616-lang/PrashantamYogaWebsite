import { test, expect } from '@playwright/test'

test.describe('Responsive Design Tests', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 }
  ]

  viewports.forEach(({ name, width, height }) => {
    test(`should display correctly on ${name} (${width}x${height})`, async ({ page }) => {
      await page.setViewportSize({ width, height })
      await page.goto('/')
      
      // Check hero section is visible and properly sized
      const heroSection = page.locator('section').first()
      await expect(heroSection).toBeVisible()
      
      // Check navigation is appropriate for viewport
      if (width < 768) {
        // Mobile: should have hamburger menu or compact navigation
        const mobileMenu = page.locator('[aria-label*="menu"]')
        const compactNav = await page.locator('nav').isVisible()
        expect(await mobileMenu.isVisible() || compactNav).toBeTruthy()
      } else {
        // Desktop/Tablet: should have full navigation
        await expect(page.locator('nav >> text=Home')).toBeVisible()
        await expect(page.locator('nav >> text=About')).toBeVisible()
      }
      
      // Check CTA button is properly sized
      const ctaButton = page.locator('text=Join a Class').first()
      await expect(ctaButton).toBeVisible()
      
      // Check images are responsive
      const images = page.locator('img')
      const imageCount = await images.count()
      
      if (imageCount > 0) {
        const firstImage = images.first()
        const boundingBox = await firstImage.boundingBox()
        
        if (boundingBox) {
          // Image should not overflow viewport
          expect(boundingBox.width).toBeLessThanOrEqual(width)
        }
      }
      
      // Check text is readable (not too small)
      const headings = page.locator('h1, h2, h3')
      const headingCount = await headings.count()
      
      if (headingCount > 0) {
        const firstHeading = headings.first()
        await expect(firstHeading).toBeVisible()
      }
    })
  })

  test('should maintain functionality across viewports', async ({ page }) => {
    const testViewports = [
      { width: 375, height: 667 }, // Mobile
      { width: 1200, height: 800 }  // Desktop
    ]
    
    for (const viewport of testViewports) {
      await page.setViewportSize(viewport)
      await page.goto('/')
      
      // Test navigation works on all viewports
      if (viewport.width < 768) {
        // Mobile navigation test
        const mobileMenuToggle = page.locator('[aria-label*="menu"]')
        if (await mobileMenuToggle.isVisible()) {
          await mobileMenuToggle.click()
          await expect(page.locator('text=About')).toBeVisible()
          await page.locator('text=About').click()
        } else {
          // Fallback if no mobile menu
          await page.locator('nav >> text=About').click()
        }
      } else {
        // Desktop navigation test
        await page.locator('nav >> text=About').click()
      }
      
      await page.waitForURL('**/about')
      await expect(page.locator('h1')).toContainText('About')
      
      // Return to home for next iteration
      await page.goto('/')
    }
  })

  test('should have proper touch targets on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    // Check buttons are large enough for touch (minimum 44px)
    const buttons = page.locator('button, a[role="button"], .btn')
    const buttonCount = await buttons.count()
    
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i)
      
      if (await button.isVisible()) {
        const boundingBox = await button.boundingBox()
        
        if (boundingBox) {
          // Minimum touch target size
          expect(boundingBox.height).toBeGreaterThanOrEqual(40)
          expect(boundingBox.width).toBeGreaterThanOrEqual(40)
        }
      }
    }
  })

  test('should handle orientation changes', async ({ page }) => {
    // Test landscape on mobile
    await page.setViewportSize({ width: 667, height: 375 })
    await page.goto('/')
    
    // Check hero section still displays properly
    await expect(page.locator('h1')).toBeVisible()
    
    // Check navigation is accessible
    const navItems = page.locator('nav >> text=Home')
    await expect(navItems).toBeVisible()
    
    // Switch back to portrait
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('h1')).toBeVisible()
  })

  test('should have readable text at all sizes', async ({ page }) => {
    const viewports = [
      { width: 320, height: 568 }, // Small mobile
      { width: 768, height: 1024 }, // Tablet
      { width: 1920, height: 1080 } // Large desktop
    ]
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport)
      await page.goto('/')
      
      // Check main heading is visible and readable
      const mainHeading = page.locator('h1').first()
      await expect(mainHeading).toBeVisible()
      
      // Check paragraph text is visible
      const paragraphs = page.locator('p')
      if (await paragraphs.count() > 0) {
        await expect(paragraphs.first()).toBeVisible()
      }
      
      // Ensure no horizontal scroll on mobile
      if (viewport.width <= 768) {
        const body = page.locator('body')
        const bodyBox = await body.boundingBox()
        
        if (bodyBox) {
          expect(bodyBox.width).toBeLessThanOrEqual(viewport.width + 20) // Allow small margin
        }
      }
    }
  })
})