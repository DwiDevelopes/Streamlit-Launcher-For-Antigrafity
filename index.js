(function () {
  var app = document.getElementById('sl-app');
  if (!app) return;

  /* Copy to clipboard */
  app.addEventListener('click', function (event) {
    var button = event.target.closest('[data-copy]');
    if (!button) return;
    var text = button.getAttribute('data-copy');
    if (!text) return;

    function done() {
      var original = button.innerHTML;
      button.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Tersalin';
      window.setTimeout(function () {
        button.innerHTML = original;
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {});
    } else {
      var area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try { document.execCommand('copy'); done(); } catch (error) {}
      document.body.removeChild(area);
    }
  });

  /* Mobile navigation */
  var toggle = document.getElementById('sl-nav-toggle');
  var menu = document.getElementById('sl-nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
