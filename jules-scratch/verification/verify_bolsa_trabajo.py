from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000/")

    # Click the "Bolsa de Trabajo" link in the footer
    page.get_by_role("link", name="Bolsa de Trabajo").click()

    # Wait for the main heading to be visible
    expect(page.get_by_role("heading", name="Bolsa de Trabajo")).to_be_visible(timeout=30000)

    # Take a screenshot
    page.screenshot(path="/app/jules-scratch/verification/bolsa_trabajo.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
