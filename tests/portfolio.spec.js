import { test, expect } from '@playwright/test'

for (const viewport of [
  { width: 3840, height: 2088 },
  { width: 1440, height: 900 },
  { width: 768, height: 1024 },
  { width: 430, height: 932 },
  { width: 390, height: 844 },
  { width: 320, height: 700 },
]) {
  test(`portfolio usable at ${viewport.width}px`, async ({ page }) => {
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.setViewportSize(viewport)
    await page.goto('/')

    await expect(page.getByRole('heading', { name: /Bryan Castaño/ })).toBeVisible()
    await expect(page.getByText('Inteligencia Artificial y Big Data', { exact: false }).first()).toBeAttached()
    await expect(page.locator('.project-card')).toHaveCount(4)
    await expect(page.locator('.project-card').nth(2)).toContainText('MySQL')
    await expect(page.locator('.project-card').nth(3)).toContainText('Spring AI')
    await expect(page.locator('#inicio').getByRole('link', { name: /Descargar CV/ })).toHaveAttribute('href', /\.pdf(?:\?|$)/)
    await expect(page.locator('#inicio').getByRole('link', { name: /LinkedIn/ })).toBeVisible()
    await expect(page.locator('#inicio').getByRole('link', { name: /GitHub/ })).toBeVisible()
    await expect(page.locator('#formacion')).not.toContainText(/\b20\d{2}\b/)
    if (viewport.width < 640) {
      const cv = await page.locator('#inicio').getByRole('link', { name: /Descargar CV/ }).boundingBox()
      const linkedin = await page.locator('#inicio').getByRole('link', { name: /LinkedIn/ }).boundingBox()
      const github = await page.locator('#inicio').getByRole('link', { name: /GitHub/ }).boundingBox()
      expect(cv.y).toBeLessThan(linkedin.y)
      expect(Math.abs(linkedin.y - github.y)).toBeLessThan(2)
      expect(Math.abs(linkedin.width - github.width)).toBeLessThan(2)
    }
    if (viewport.height > 1500) {
      const hero = await page.locator('#inicio').boundingBox()
      expect(hero.height).toBeLessThan(1100)
    }

    if (viewport.width >= 768) {
      await page.locator('.project-card').first().scrollIntoViewIfNeeded()
      await page.waitForTimeout(950)
      const first = await page.locator('.project-visual').nth(0).boundingBox()
      const second = await page.locator('.project-visual').nth(1).boundingBox()
      expect(Math.abs(first.y - second.y)).toBeLessThan(2)
    }

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow).toBeLessThanOrEqual(1)
    expect(errors).toEqual([])

    if (viewport.width < 768) {
      await page.getByRole('button', { name: 'Abrir menú' }).click()
      await expect(page.getByRole('navigation', { name: 'Navegación móvil' })).toBeVisible()
      await page.getByRole('navigation', { name: 'Navegación móvil' }).getByRole('link', { name: 'Formación' }).click()
      await expect(page).toHaveURL(/#formacion$/)
      await expect(page.getByRole('navigation', { name: 'Navegación móvil' })).toHaveCount(0)
    }
  })
}

test('project hover responds with motion and an accent edge', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  const project = page.locator('.project-visual').first()
  await project.scrollIntoViewIfNeeded()
  await page.waitForTimeout(950)
  await project.hover()
  await expect(project).toHaveCSS('border-top-color', 'rgb(217, 149, 120)')
  await expect(project).not.toHaveCSS('transform', 'none')
  await expect(project).not.toHaveCSS('box-shadow', 'none')
})
