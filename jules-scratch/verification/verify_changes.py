from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the home page and scroll to the features section
    page.goto("http://localhost:8080")
    features_section = page.locator("#institucional")
    features_section.scroll_into_view_if_needed()
    page.screenshot(path="jules-scratch/verification/01_home_page_features.png")

    # Navigate to the contact page
    page.goto("http://localhost:8080/contacto")
    page.screenshot(path="jules-scratch/verification/02_contact_page.png")

    # Navigate to the ciclo basico page
    page.goto("http://localhost:8080/ciclo-basico")
    new_text = page.locator("text=A raíz de la nueva normativa")
    expect(new_text).to_be_visible()
    page.screenshot(path="jules-scratch/verification/03_ciclo_basico_page.png")

    # Navigate to the programacion page
    page.goto("http://localhost:8080/programacion")
    consultant_section = page.locator("text=Formato de Consultora Privada")
    expect(consultant_section).to_be_visible()
    page.screenshot(path="jules-scratch/verification/04_programacion_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
