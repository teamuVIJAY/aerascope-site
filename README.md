# aerascope-site

Static website for **The Aerascope**, a consultancy that assists students who want to study abroad. The repository contains a single-page site with contact information and details about universities.

## Viewing the site locally

The project is completely static. You can preview it by simply opening `index.html` in your browser:

```bash
# from the repository root
xdg-open index.html   # or double-click the file
```

Alternatively, you can run a lightweight web server if you prefer:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000/index.html` in your browser.

## Modifying the site

The site uses plain HTML, CSS and a small amount of JavaScript. You can update the content by editing these files directly:

- `index.html` – the main page markup
- `style.css` – global styles
- `script.js` – any interactive behaviour

Edit the files in your favourite text editor, save the changes and refresh your browser to see the result.

## Contributing

Pull requests are welcome. To contribute:

1. Fork the repository or create a feature branch in your clone.
2. Make your changes with clear commit messages.
3. Open a pull request describing what you changed and why.

Please keep the site small and fast and follow the existing code style.
