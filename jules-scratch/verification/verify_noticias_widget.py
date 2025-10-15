from playwright.sync_api import sync_playwright, expect
import time

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    for _ in range(3): # Retry up to 3 times
        try:
            page.goto("http://localhost:8080/noticias", wait_until="domcontentloaded")
            break # If successful, exit loop
        except Exception as e:
            print(f"Connection failed: {e}. Retrying in 5 seconds...")
            time.sleep(5)
    else:
        print("Failed to connect to the server after multiple retries.")
        browser.close()
        return

    # Locate the widget and scroll it into view to trigger lazy loading
    elfsight_widget_locator = page.locator(".elfsight-app-2af9e07a-6b1e-4e25-858b-f53d170ab980")
    elfsight_widget_locator.scroll_into_view_if_needed()

    # Wait for the widget container to have at least one child element,
    # which indicates the Elfsight script has started loading content.
    expect(elfsight_widget_locator).not_to_be_empty(timeout=20000)

    # Add a small extra pause for the content within the iframe to render
    time.sleep(3)

    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)