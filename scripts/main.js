/**
 * ELIO landing page interactions.
 * Runs after all HTML partials are injected into the DOM.
 */

function playVideo(id) {
  const video   = document.getElementById('vid-' + id);
  const overlay = document.getElementById('overlay-' + id);
  if (!video || !overlay) return;

  overlay.classList.add('hidden');
  video.controls = true;
  video.play();

  const showOverlay = () => overlay.classList.remove('hidden');
  video.addEventListener('pause', () => {
    if (video.ended || video.paused) showOverlay();
  });
  video.addEventListener('ended', showOverlay);
}

function switchTab(lang) {
  ['python', 'arduino', 'claude'].forEach((l) => {
    const pane = document.getElementById('code-' + l);
    const btn  = document.getElementById('tab-' + l);
    if (pane) pane.classList.add('hidden');
    if (btn) {
      btn.classList.remove('active');
      btn.classList.add('text-slate-400');
      btn.classList.remove('text-white');
    }
  });

  const activePane = document.getElementById('code-' + lang);
  const activeBtn  = document.getElementById('tab-' + lang);
  if (activePane) activePane.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.classList.remove('text-slate-400');
    activeBtn.classList.add('text-white');
  }
}

// Expose handlers used by inline onclick attributes inside partials.
window.playVideo = playVideo;
window.switchTab = switchTab;

function initFadeInObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}

document.addEventListener('partials:loaded', () => {
  initFadeInObserver();
});
