from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to the login page
            page.goto("http://localhost:3000/login")

            # Fill in the login form
            page.get_by_label("Email").fill("admin@example.com")
            page.get_by_label("Password").fill("admin123")

            # Click the login button
            page.get_by_role("button", name="Login").click()

            # Wait for navigation to the dashboard
            expect(page).to_have_url("http://localhost:3000/admin/dashboard")

            # Click on the "Gestión de Alumnos" card
            page.get_by_role("link", name="Gestión de Alumnos").click()

            # Wait for navigation to the students page
            expect(page).to_have_url("http://localhost:3000/admin/students")

            # Check for the heading of the students page
            expect(page.get_by_role("heading", name="Gestión de Alumnos")).to_be_visible()

            # Take a screenshot
            page.screenshot(path="jules-scratch/verification/verification.png")

            print("Verification script completed successfully.")

        except Exception as e:
            print(f"An error occurred: {e}")
            page.screenshot(path="jules-scratch/verification/error.png")

        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()
