# Gemini CLI Instructions for Vogel Yoga

Welcome to the Vogel Yoga website repository. Here are some technical notes and guidelines for maintaining this project:

## Development Environment & Build

- **Hugo Version:** The `hugo-scroll` theme (as a submodule) requires a newer version of Hugo Extended (>= v0.132.0). 
- **Local Preview:** Use the included `Containerfile` via Podman to safely build and serve the site without polluting the host environment:
  ```bash
  podman build -t vogel-yoga-hugo -f Containerfile .
  podman run -d --name vogel-yoga -p 1313:1313 vogel-yoga-hugo
  ```
- **Git Submodules:** Make sure to keep the theme up to date. If freshly cloned, remember to run:
  ```bash
  git submodule update --init --recursive
  ```

## Styling and Themes
- The primary theme is `hugo-scroll`.
- Customizations to the head of the document, including overriding CSS classes, are found in `layouts/partials/custom_head.html`.
- **Note on Theme Update:** The `hugo-scroll` theme updated its section CSS classes from `.odd`/`.even` to `.dark`/`.light`. If customizing section backgrounds again, use `.post-holder.dark` instead of `.odd`.

*Let the birds fly!*