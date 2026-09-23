# QuickQR Generator — Instant QR Code Creator & Exporter

A fast, lightweight, and responsive web utility built with pure Vanilla JavaScript, semantic HTML5, and modern CSS3 that dynamically generates scannable QR codes for URLs, text strings, and contact details with smooth expand/collapse card animations.

[![Live Demo](https://img.shields.io/badge/Demo-Live_Demo-06b6d4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://syedabsar99.github.io/qr-code-generator/)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](script.js)
[![HTML5 & CSS3](https://img.shields.io/badge/Stack-HTML5%20%26%20CSS3-E34F26?style=for-the-badge&logo=html5&logoColor=white)](style.css)
[![License](https://img.shields.io/badge/License-MIT-6366f1?style=for-the-badge)](LICENSE)

---

## Preview

![QuickQR Generator Preview](preview.png)

> **Live Demo:** [syedabsar99.github.io/qr-code-generator](https://syedabsar99.github.io/qr-code-generator/)

---

## Overview

Designed and built by **Syed Noor Ul Absar**, this tool provides instantaneous QR code generation without bloated dependencies or external client bundles. It communicates seamlessly with standard QR encoding APIs to produce high-contrast, universally scannable matrix barcodes suitable for links, Wi-Fi credentials, or plain text.

The interface incorporates a smooth height transition upon QR generation and invalid-input shake animations.

---

## Key Features

- **Instant Real-Time QR Generation** — Quickly generates sharp, scannable QR codes from any valid URL, text snippet, or payload.
- **Smooth Expansion Animation** — Card dynamically transitions in height with CSS keyframe easing when the QR image is rendered.
- **Error Feedback & Input Shaking** — Features an energetic CSS shake animation if the user attempts to generate a code with an empty input field.
- **Keyboard Shortcut Integration** — Press 'Enter' to generate codes instantly without reaching for the mouse.
- **Mobile-Friendly Layout** — Fluid scaling ensuring the card and QR output look crisp on small phones (`<=380px`) as well as tablets and desktops.

---

## Tech Stack

| Layer | Technologies | Details |
| :--- | :--- | :--- |
| **Structure** | Semantic HTML5 | Clean input container, accessible image tags, and button states |
| **Styling** | Modern CSS3 | Linear gradients, CSS keyframe shake animations, transition smoothing, media queries |
| **Logic** | Vanilla JavaScript (ES6+) | Input value extraction, URL parameter encoding, dynamic image loading, DOM events |
| **Hosting** | GitHub Pages | CDN-hosted static delivery |

---

## Project Structure

```text
qr-code-generator/
├── index.html         # Application markup and input form
├── LICENSE            # MIT open-source license
├── preview.png        # High-resolution application preview screenshot
├── README.md          # Comprehensive repository documentation
├── script.js          # QR API request handler & DOM animation controller
└── style.css          # Design system, shake animations, and responsive queries
```

---

## Getting Started

No build tools or library installations are required.

### 1. Clone the repository
```bash
git clone https://github.com/syedabsar99/qr-code-generator.git
```

### 2. Open locally
Launch `index.html` in your browser:
```bash
cd qr-code-generator
start index.html
```

Or run via any static web server:
```bash
npx serve .
# or
python -m http.server 8080
```

---

## Author & Contact

**Syed Noor Ul Absar**
- **Role**: Frontend Web Developer
- **Education**: Bachelor of Computer Applications (BCA), Chandigarh University (8.35 SGPA)
- **Portfolio**: [syedabsar99.github.io/portfolio](https://syedabsar99.github.io/portfolio/)
- **GitHub**: [@syedabsar99](https://github.com/syedabsar99)
- **LinkedIn**: [linkedin.com/in/syed-noor-ul-absar-7b6408365](https://www.linkedin.com/in/syed-noor-ul-absar-7b6408365/)
- **Email**: syedabsar99@gmail.com

---

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use, modify, and distribute for educational or personal use.
