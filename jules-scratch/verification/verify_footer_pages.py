from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    context = browser.new_context()
    page = context.new_page()

    # Campus Virtual
    page.goto("http://127.0.0.1:8080/campus-virtual")
    page.screenshot(path="jules-scratch/verification/01_campus_virtual.png")

    # Biblioteca Digital
    page.goto("http://127.0.0.1:8080/biblioteca-digital")
    page.screenshot(path="jules-scratch/verification/02_biblioteca_digital.png")

    # Sistema de Gestión
    page.goto("http://127.0.0.1:8080/sistema-gestion")
    page.screenshot(path="jules-scratch/verification/03_sistema_gestion.png")

    # Bolsa de Trabajo
    page.goto("http://127.0.0.1:8080/bolsa-trabajo")
    page.screenshot(path="jules-scratch/verification/04_bolsa_trabajo.png")

    # Calendario Académico
    page.goto("http://127.0.0.1:8080/calendario-academico")
    page.screenshot(path="jules-scratch/verification/05_calendario_academico.png")

    # Reglamento Interno
    page.goto("http://127.0.0.1:8080/reglamento-interno")
    page.screenshot(path="jules-scratch/verification/06_reglamento_interno.png")

    context.close()
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
