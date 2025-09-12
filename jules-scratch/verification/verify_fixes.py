from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context()
    page = context.new_page()

    # Check header padding on Campus Virtual page
    page.goto("http://127.0.0.1:8080/campus-virtual")
    page.screenshot(path="jules-scratch/verification/07_campus_virtual_padding.png")

    # Check scroll button on Calendario Academico page
    page.goto("http://127.0.0.1:8080/calendario-academico")
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(1000) # wait for scroll to finish and button to appear
    page.screenshot(path="jules-scratch/verification/09_calendario_full_page.png", full_page=True)

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
