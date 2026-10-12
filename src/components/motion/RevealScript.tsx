/**
 * Scroll reveals without a library.
 *
 * Replaces Motion, which shipped roughly 365KB of JavaScript to animate a few
 * section entrances. This is a single IntersectionObserver injected before
 * hydration, so reveals work on the first paint rather than waiting for React.
 *
 * Content is visible by default. The `reveal-ready` class that hides elements
 * is only added once this script runs, so a reader with JavaScript disabled —
 * or one whose bundle fails — still sees the whole page.
 */
export default function RevealScript() {
  const script = `
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var root = document.documentElement;
  root.classList.add('reveal-ready');

  function claim() {
    var items = document.querySelectorAll('[data-reveal]:not([data-reveal-seen])');
    if (!items.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.15 });

    items.forEach(function (el) {
      el.setAttribute('data-reveal-seen', '');
      // Index the children of a stagger group so CSS can offset each one.
      if (el.hasAttribute('data-reveal-stagger')) {
        Array.prototype.forEach.call(el.children, function (child, i) {
          child.style.setProperty('--reveal-index', String(i));
        });
      }
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', claim);
  } else {
    claim();
  }
  // Catch anything React renders after the first pass.
  window.addEventListener('load', claim);
})();
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
