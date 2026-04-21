/**
 * Lightweight HTML partial loader.
 *
 * Usage:
 *   <div data-include="sections/hero.html"></div>
 *
 * Every element with [data-include] is replaced by the fetched HTML.
 * After all partials are loaded, a `partials:loaded` event fires on `document`,
 * which is when main.js attaches interactive behaviour (tabs, video, fade-in).
 *
 * Note: fetch() requires a local/remote HTTP server (e.g. `npx serve .` or
 * GitHub Pages). Opening index.html directly via file:// will fail CORS checks.
 */
(async () => {
  const nodes = Array.from(document.querySelectorAll('[data-include]'));

  await Promise.all(
    nodes.map(async (el) => {
      const url = el.getAttribute('data-include');
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const html = await res.text();

        const template = document.createElement('template');
        template.innerHTML = html.trim();
        el.replaceWith(template.content);
      } catch (err) {
        console.error(`[include] Failed to load ${url}:`, err);
        el.innerHTML = `<!-- include failed: ${url} -->`;
      }
    })
  );

  document.dispatchEvent(new CustomEvent('partials:loaded'));
})();
