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
    page.wait_for_url("http://localhost:8080/admin/dashboard")

    # Admin Dashboard screenshot
    page.screenshot(path="jules-scratch/verification/admin_dashboard.png")

    # Navigate to Students Page
    page.get_by_role("link", name="Alumnos").click()
    page.wait_for_url("http://localhost:8080/admin/students")
    page.screenshot(path="jules-scratch/verification/admin_students.png")

    # Navigate to Teachers Page
    page.get_by_role("link", name="Profesores").click()
    page.wait_for_url("http://localhost:8080/admin/teachers")
    page.screenshot(path="jules-scratch/verification/admin_teachers.png")

    # Navigate to Courses Page
    page.get_by_role("link", name="Cursos").click()
    page.wait_for_url("http://localhost:8080/admin/courses")
    page.screenshot(path="jules-scratch/verification/admin_courses.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)