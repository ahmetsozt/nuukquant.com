# -*- coding: utf-8 -*-
"""Branded 1200x630 Open Graph card per page, in the same language as og.png."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

PAGES = {
    "about": ("About NUUK", "Founded in DIFC, Dubai on 17 years of dealing-desk experience"),
    "ai-trading": ("AI trading systems", "Built, tested and run on our own capital first"),
    "track-record": ("Track record", "Every figure with its source and method"),
    "portfolio-management": ("Managed accounts", "Your capital stays in your own broker account"),
    "how-we-make-money": ("How we make money", "Four income sources, every fee explained"),
    "brokers": ("Broker partners", "Six regulated brokers, compared independently"),
    "signals": ("Research and signals", "Desk notes, trade ideas and mentorship"),
    "education": ("Education", "Webinars and seminars for investors"),
    "insights": ("Market insights", "Macro, FX, commodities, indices and crypto"),
    "case-studies": ("Case studies", "How each service works in practice"),
    "investors": ("Investor portal", "Research, signals and reports for subscribers"),
    "apply": ("Apply for membership", "Choose a plan and open your access"),
    "contact-us": ("Contact", "DIFC, Dubai - reply within one business day"),
    "economic-calendar": ("Economic calendar", "Every release that moves the market"),
}


def background() -> Image.Image:
    """Black on the left fading into NUUK blue on the right, as on the main card."""
    img = Image.new("RGB", (W, H), (10, 10, 10))
    px = img.load()
    for x in range(W):
        t = max(0.0, (x / W - 0.25) / 0.75) ** 1.6
        for y in range(H):
            v = t * (0.55 + 0.45 * (y / H))
            px[x, y] = (int(10 + (1 - 10) * v), int(10 + (48 - 10) * v), int(10 + (140 - 10) * v))
    return img


def wrap(draw, text, font, max_width):
    words, lines, line = text.split(), [], ""
    for word in words:
        probe = f"{line} {word}".strip()
        if draw.textlength(probe, font=font) <= max_width:
            line = probe
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def card(slug: str, title: str, subtitle: str) -> None:
    img = background()
    d = ImageDraw.Draw(img)
    mark = ImageFont.truetype(BOLD, 52)
    d.text((80, 70), "NUUK", font=mark, fill=(255, 255, 255))
    mark_w = d.textlength("NUUK", font=mark)
    d.rectangle([80 + mark_w + 10, 70 + 34, 80 + mark_w + 32, 70 + 56], fill=(88, 166, 70))

    d.rectangle([80, 190, 152, 196], fill=(1, 101, 250))

    size = 82 if len(title) < 22 else 68
    title_font = ImageFont.truetype(BOLD, size)
    lines = wrap(d, title, title_font, W - 160)
    y = 240
    for line in lines:
        d.text((80, y), line, font=title_font, fill=(255, 255, 255))
        y += size + 12

    sub_font = ImageFont.truetype(REG, 30)
    for line in wrap(d, subtitle, sub_font, W - 200)[:2]:
        d.text((80, y + 14), line, font=sub_font, fill=(190, 200, 220))
        y += 40

    foot = ImageFont.truetype(BOLD, 24)
    d.text((80, H - 74), "nuukquant.com  ·  DIFC, Dubai", font=foot, fill=(150, 150, 150))
    img.save(f"public/og/{slug}.png", optimize=True)


if __name__ == "__main__":
    for slug, (title, subtitle) in PAGES.items():
        card(slug, title, subtitle)
    print(f"{len(PAGES)} cards written to public/og/")
