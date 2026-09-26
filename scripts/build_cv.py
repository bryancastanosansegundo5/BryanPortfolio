"""Generate the CV linked from the portfolio."""

from pathlib import Path
from io import BytesIO
from PIL import Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src" / "assets" / "Curriculum Vitae - Bryan Castano San Segundo.pdf"
PORTRAIT = ROOT / "src" / "assets" / "bryan-portrait-natural.webp"

pdfmetrics.registerFont(TTFont("Segoe", r"C:\Windows\Fonts\segoeui.ttf"))
pdfmetrics.registerFont(TTFont("SegoeBold", r"C:\Windows\Fonts\segoeuib.ttf"))

INK = colors.HexColor("#171313")
PANEL = colors.HexColor("#2b2222")
CREAM = colors.HexColor("#f0e9de")
MUTED = colors.HexColor("#665854")
ACCENT = colors.HexColor("#a8573e")
LINE = colors.HexColor("#d8cbc3")

PAGE_W, PAGE_H = A4
LEFT = 38
RIGHT = PAGE_W - 38
CONTENT_TOP = PAGE_H - 157
LEFT_W = 173
GAP = 28
MAIN_X = LEFT + LEFT_W + GAP
MAIN_W = RIGHT - MAIN_X


def paragraph(c, text, x, top, width, size=8.5, leading=12.5, color=MUTED, bold=False):
    style = ParagraphStyle(
        "body", fontName="SegoeBold" if bold else "Segoe",
        fontSize=size, leading=leading, textColor=color, alignment=TA_LEFT,
        spaceBefore=0, spaceAfter=0,
    )
    item = Paragraph(text, style)
    _, height = item.wrap(width, PAGE_H)
    item.drawOn(c, x, top - height)
    return top - height


def heading(c, title, x, top, width, before=0):
    baseline = top - before
    c.setFont("SegoeBold", 9)
    c.setFillColor(ACCENT)
    c.drawString(x, baseline, title.upper())
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.line(x, baseline - 11, x + width, baseline - 11)
    return baseline - 31


def item(c, title, subtitle, detail, x, top, width, gap=16):
    top = paragraph(c, title, x, top, width, size=10, leading=13.5, color=INK, bold=True) - 3
    top = paragraph(c, subtitle, x, top, width, size=8.8, leading=12.5, color=ACCENT) - 4
    if detail:
        top = paragraph(c, detail, x, top, width, size=8.7, leading=13)
    return top - gap


def build():
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("CV — Bryan Castaño San Segundo")
    c.setAuthor("Bryan Castaño San Segundo")

    c.setFillColor(INK)
    c.rect(0, PAGE_H - 136, PAGE_W, 136, stroke=0, fill=1)
    c.setFillColor(ACCENT)
    c.rect(LEFT, PAGE_H - 42, 19, 3, stroke=0, fill=1)
    c.setFillColor(CREAM)
    c.setFont("SegoeBold", 24)
    c.drawString(LEFT, PAGE_H - 72, "Bryan Castaño San Segundo")
    c.setFont("Segoe", 11)
    c.drawString(LEFT, PAGE_H - 94, "Desarrollador Full Stack")
    c.setFont("Segoe", 8.2)
    c.setFillColor(colors.HexColor("#c4b6ac"))
    c.drawString(LEFT, PAGE_H - 115, "Zamora, España   ·   +34 657 423 330   ·   bryan.sanse@gmail.com")
    photo_size = 96
    photo_x = RIGHT - photo_size
    photo_y = PAGE_H - 116
    c.saveState()
    clip = c.beginPath()
    clip.circle(photo_x + photo_size / 2, photo_y + photo_size / 2, photo_size / 2)
    c.clipPath(clip, stroke=0, fill=0)
    photo = Image.open(PORTRAIT).convert("RGB")
    photo.thumbnail((320, 320))
    photo_bytes = BytesIO()
    photo.save(photo_bytes, format="JPEG", quality=88, optimize=True)
    photo_bytes.seek(0)
    c.drawImage(ImageReader(photo_bytes), photo_x, photo_y, photo_size, photo_size, preserveAspectRatio=True, anchor="c")
    c.restoreState()
    c.setStrokeColor(ACCENT)
    c.setLineWidth(1)
    c.circle(photo_x + photo_size / 2, photo_y + photo_size / 2, photo_size / 2, stroke=1, fill=0)

    left_y = CONTENT_TOP
    left_y = heading(c, "Formación", LEFT, left_y, LEFT_W)
    left_y = item(c, "IA y Big Data", "Curso de Especialización · En curso", None, LEFT, left_y, LEFT_W)
    left_y = item(c, "Desarrollo de Aplicaciones Web", "Técnico Superior", "IES Claudio Moyano", LEFT, left_y, LEFT_W)
    left_y = item(c, "Desarrollo de Aplicaciones Multiplataforma", "Técnico Superior", "IES Claudio Moyano", LEFT, left_y, LEFT_W)
    left_y = item(c, "Sistemas Microinformáticos y Redes", "Técnico", "IES Claudio Moyano", LEFT, left_y, LEFT_W)

    left_y = heading(c, "Tecnologías", LEFT, left_y, LEFT_W, before=20)
    for title, value in [
        ("Frontend", "React, JavaScript, Astro, HTML, CSS, Tailwind CSS, GSAP"),
        ("Backend", "Java, Spring Boot, Node.js, PHP, VB.NET"),
        ("Datos e integración", "SQL Server, MySQL, APIs REST, Crystal Reports"),
        ("Herramientas", "Git, Vercel, WordPress"),
    ]:
        left_y = paragraph(c, title, LEFT, left_y, LEFT_W, size=9, leading=12.5, color=INK, bold=True) - 3
        left_y = paragraph(c, value, LEFT, left_y, LEFT_W, size=8.6, leading=12.5) - 12

    left_y = heading(c, "Enlaces", LEFT, left_y, LEFT_W, before=16)
    for label, url in [
        ("LinkedIn", "linkedin.com/in/bryan-castaño-san-segundo"),
        ("GitHub", "github.com/bryancastanosansegundo5"),
    ]:
        left_y = paragraph(c, label, LEFT, left_y, LEFT_W, size=8.8, leading=12, color=INK, bold=True) - 2
        left_y = paragraph(c, url, LEFT, left_y, LEFT_W, size=7.4, leading=11) - 12

    main_y = CONTENT_TOP
    main_y = heading(c, "Perfil", MAIN_X, main_y, MAIN_W)
    main_y = paragraph(
        c,
        "Desarrollador full stack con experiencia en aplicaciones web, ERP e integraciones. "
        "Combino desarrollo frontend y backend con una visión práctica del negocio. "
        "Actualmente amplío mi formación en Inteligencia Artificial y Big Data.",
        MAIN_X, main_y, MAIN_W, size=9.2, leading=14.5,
    )

    main_y = heading(c, "Experiencia", MAIN_X, main_y, MAIN_W, before=23)
    jobs = [
        (
            "Software Developer y Nuevas Tecnologías",
            "Grupo TecoZam · Sep 2025 - Actualidad",
            "Personalización de ERP con VB.NET y SQL Server; integración de APIs REST y automatización de procesos. Desarrollo con Node.js, Spring Boot, Astro y JavaScript.",
        ),
        (
            "Desarrollador Full Stack",
            "Questión de Imagen Comunicación · May - Ago 2025",
            "Webs a medida con WordPress, PHP y JavaScript. Gestión de hosting, DNS y dominios; participación en proyectos con React y Spring Boot.",
        ),
        (
            "Desarrollador Web",
            "Serbatic S.A. · Mar - Jun 2025",
            "Tienda online con Java, Spring Boot y React. Aplicación de evaluación de candidatos con vectorización.",
        ),
        (
            "Consultor Tecnológico",
            "Serinza Solution SL · Dic 2023 - Sep 2024",
            "Definición e implementación de soluciones digitales para necesidades de negocio, incluyendo proyectos con WordPress.",
        ),
    ]
    for title, subtitle, description in jobs:
        main_y = item(c, title, subtitle, description, MAIN_X, main_y, MAIN_W, gap=20)

    main_y = heading(c, "Trayectoria anterior", MAIN_X, main_y, MAIN_W, before=18)
    main_y = paragraph(
        c,
        "<b>Ejército de Tierra</b> · Soldado profesional (2021 - 2023)<br/>"
        "<b>Decathlon España</b> · Técnico informático (2018 - 2021)<br/>"
        "<b>Zener Plus SL</b> · Instalador de redes (2017)<br/>"
        "<b>Serinza Solution SL</b> · Desarrollador web (2017)<br/>"
        "<b>Bits &amp; Company</b> · Soporte informático (2014 - 2017)",
        MAIN_X, main_y, MAIN_W, size=8.8, leading=15,
    )

    if min(left_y, main_y) < 45:
        raise RuntimeError(f"CV content exceeds page: left={left_y:.1f}, right={main_y:.1f}")
    print(f"Content bottoms: left={left_y:.1f}, right={main_y:.1f}")

    c.setStrokeColor(LINE)
    c.line(LEFT, 29, RIGHT, 29)
    c.setFont("Segoe", 7)
    c.setFillColor(MUTED)
    c.drawString(LEFT, 17, "Bryan Castaño San Segundo")
    c.drawRightString(RIGHT, 17, "CV · 2026")
    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
