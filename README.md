# AURA — AI Agency Website

A clean, modern AI agency website selling AI websites, autonomous agents, and chatbots to businesses.

---

## ⚡ Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized static build in the `dist/` directory.

---

## 🔮 Spline 3D Scene

The hero section features your 3D Spline element embedded on the right:
- URL: `https://prod.spline.design/F6OSVAxgD0weeLqg/scene.splinecode`
- Config file: [src/config/splineConfig.js](file:///c:/Users/infor/OneDrive/Desktop/AI%20Agency%20Website/src/config/splineConfig.js)

---

## 📂 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Clean, minimalist header navigation
│   │   ├── Hero.jsx                 # Value prop with Spline 3D element on the right
│   │   ├── SplineHeroContainer.jsx  # Embeds the Spline 3D scene directly
│   │   ├── Services.jsx             # AI Websites, Autonomous Agents, AI Chatbots
│   │   ├── LiveAgentSandbox.jsx     # Real-time interactive agent simulation demo
│   │   ├── ArchitectureVisualizer.jsx # 6-stage system pipeline
│   │   ├── CaseStudies.jsx          # Verified client results & metrics
│   │   ├── Estimator.jsx            # Instant project scope & budget calculator
│   │   ├── ClientRoadmap.jsx        # 4-stage sprint process
│   │   ├── ContactModal.jsx         # Clean project inquiry form
│   │   └── Footer.jsx               # Minimalist footer
│   ├── config/
│   │   └── splineConfig.js          # Spline 3D URL configuration
│   ├── App.jsx                      # Main app layout
│   ├── index.css                    # Tailwind CSS
│   └── main.jsx                     # Vite entry point
├── index.html                       # Unified clean font & Spline runtime
├── tailwind.config.js               # Theme configuration
└── package.json
```
