# Walk_Or_Talk

This project is a small swipe-based demo that includes a couple of Progressive Web App (PWA) basics. It now features softer styling using the Poppins font.

## Opening the app

1. Clone or download the repository.
2. Open the `index.html` file directly in your browser, or start a simple local server and navigate to it:

   ```bash
   python3 -m http.server
   ```
   Then browse to `http://localhost:8000/index.html`.

## PWA features

- **Manifest:** `manifest.json` provides metadata like the name and theme colors so the app can be added to a home screen.
- **Service worker:** `service-worker.js` registers a service worker that currently just logs installation but lays the groundwork for offline capabilities.
