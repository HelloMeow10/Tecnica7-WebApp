from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Login
    page.goto("http://localhost:8080/login")
    page.get_by_label("Email").fill("admin@example.com")
    page.get_by_label("Contraseña").fill("admin123")
    page.get_by_role("button", name="Entrar").click()
    page.wait_for_url("http://localhost:8080/dashboard")

    # Dashboard screenshot
    page.screenshot(path="jules-scratch/verification/dashboard.png")

    # Navigate to Campus Virtual
    page.get_by_role("link", name="Campus Virtual").first.click()
    page.wait_for_url("http://localhost:8080/campus-virtual")

    # Navigate to MyGrades
    page.get_by_role("link", name="Mis Calificaciones").click()
    page.wait_for_url("http://localhost:8080/campus/my-grades")
    page.screenshot(path="jules-scratch/verification/grades.png")

    # Navigate to Materials
    page.get_by_role("link", name="Material de Estudio").click()
    page.wait_for_url("http://localhost:8080/campus/materials")
    page.screenshot(path="jules-scratch/verification/materials.png")


    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)