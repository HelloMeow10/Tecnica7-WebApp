from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://127.0.0.1:8080")
        page.screenshot(path="jules-scratch/verification/chatbot_icon_initial.png")
        page.evaluate("window.scrollTo(0, 100)")
        page.screenshot(path="jules-scratch/verification/chatbot_icon_scrolled.png")
        browser.close()

if __name__ == "__main__":
    run()
