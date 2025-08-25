import { test, expect } from '@playwright/test'

test.describe('Performance and SEO Tests', () => {
  test('should load homepage within acceptable time', async ({ page }) => {
    const startTime = Date.now()
    
    await page.goto('/')
    
    // Wait for main content to be visible
    await expect(page.locator('h1')).toBeVisible()
    
    const loadTime = Date.now() - startTime
    
    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
  })

  test('should have proper meta tags for SEO', async ({ page }) => {
    await page.goto('/')
    
    // Check title
    await expect(page).toHaveTitle(/Prashantam Yoga/)
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]')
    const description = await metaDescription.getAttribute('content')
    expect(description).toBeTruthy()
    expect(description.toLowerCase()).toContain('yoga')
    expect(description.toLowerCase()).toContain('stress')
    
    // Check meta keywords
    const metaKeywords = page.locator('meta[name="keywords"]')
    const keywords = await metaKeywords.getAttribute('content')
    expect(keywords).toBeTruthy()
    expect(keywords.toLowerCase()).toContain('therapeutic yoga')
    expect(keywords.toLowerCase()).toContain('stress relief')
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]')
    expect(await ogTitle.getAttribute('content')).toBeTruthy()
    
    const ogDescription = page.locator('meta[property="og:description"]')
    expect(await ogDescription.getAttribute('content')).toBeTruthy()
  })

  test('should have accessible images', async ({ page }) => {
    await page.goto('/')
    
    // Check all images have alt text
    const images = page.locator('img')
    const imageCount = await images.count()
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      const src = await img.getAttribute('src')
      
      // Skip decorative images or icons
      if (src && !src.includes('icon') && !src.includes('decoration')) {
        expect(alt).toBeTruthy()
        expect(alt.length).toBeGreaterThan(3)
      }
    }
  })

  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/')
    
    // Should have one H1
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)
    
    // Check heading hierarchy
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    
    const h2s = page.locator('h2')
    const h2Count = await h2s.count()
    
    if (h2Count > 0) {
      await expect(h2s.first()).toBeVisible()
    }
  })

  test('should handle animations without affecting usability', async ({ page }) => {
    await page.goto('/')
    
    // Check that animated elements become visible
    const animatedElements = page.locator('[class*="motion"], [class*="animate"]')
    const animatedCount = await animatedElements.count()
    
    if (animatedCount > 0) {
      // Wait for animations to settle
      await page.waitForTimeout(2000)
      
      // Elements should be visible after animation
      await expect(animatedElements.first()).toBeVisible()
    }
    
    // Check that CTA buttons are immediately accessible
    const ctaButton = page.locator('text=Join a Class').first()
    await expect(ctaButton).toBeVisible()
    await expect(ctaButton).toBeEnabled()
  })

  test('should load fonts properly', async ({ page }) => {
    await page.goto('/')
    
    // Wait for fonts to load
    await page.waitForTimeout(2000)
    
    // Check font loading
    const fontLoaded = await page.evaluate(() => {
      return document.fonts.ready.then(() => {
        const inter = [...document.fonts].find(font => font.family.includes('Inter'))
        const playfair = [...document.fonts].find(font => font.family.includes('Playfair'))
        
        return {
          inter: inter ? inter.status === 'loaded' : false,
          playfair: playfair ? playfair.status === 'loaded' : false
        }
      })
    })
    
    // At least one custom font should be loaded
    expect(fontLoaded.inter || fontLoaded.playfair).toBeTruthy()
  })

  test('should not have console errors', async ({ page }) => {
    const consoleErrors = []
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })
    
    await page.goto('/')
    
    // Wait for page to fully load
    await page.waitForTimeout(3000)
    
    // Filter out known harmless errors
    const criticalErrors = consoleErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('404') &&
      !error.includes('lotus-icon.svg')
    )
    
    expect(criticalErrors).toHaveLength(0)
  })

  test('should be accessible to screen readers', async ({ page }) => {
    await page.goto('/')
    
    // Check for skip links
    const skipLink = page.locator('a[href*="#main"], a[href*="#content"]').first()
    
    // Check for proper ARIA labels
    const navigation = page.locator('nav')
    if (await navigation.count() > 0) {
      const navLabel = await navigation.first().getAttribute('aria-label')
      expect(navLabel).toBeTruthy()
    }
    
    // Check buttons have accessible names
    const buttons = page.locator('button')
    const buttonCount = await buttons.count()
    
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i)
      const text = await button.textContent()
      const ariaLabel = await button.getAttribute('aria-label')
      
      expect(text || ariaLabel).toBeTruthy()
    }
  })
})