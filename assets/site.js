/* ============================================================
   ARLS-ZA — wspólny skrypt strony / shared page script
   Identyfikatory sekcji są takie same we wszystkich wersjach
   językowych, więc kotwica przenosi się przy zmianie języka.
   ============================================================ */
(function () {
  'use strict';

  /* ---- zegar ogniska: 10 pierścieni w skali ---- */
  var g = document.getElementById('rings');
  if (g) {
    var cx = 260, cy = 210, scale = 0.95;   // 200 m → 190 px
    var levels = [200, 180, 160, 140, 120, 100, 80, 60, 40, 20];
    var NS = 'http://www.w3.org/2000/svg';
    var unit = g.getAttribute('data-unit') || 'm';

    levels.forEach(function (r, i) {
      var lvl = levels.length - i;              // 1 rysowany pierwszy
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', cx);
      c.setAttribute('cy', cy);
      c.setAttribute('r', (r * scale).toFixed(1));
      c.setAttribute('class', 'ring');
      c.style.transitionDelay = (lvl * 90) + 'ms';
      g.appendChild(c);

      if (lvl === 1 || lvl % 3 === 0 || lvl === 10) {
        var t = document.createElementNS(NS, 'text');
        t.setAttribute('x', cx + 5);
        t.setAttribute('y', cy - r * scale + 13);
        t.setAttribute('class', 'ring-lab');
        t.style.transitionDelay = (lvl * 90 + 120) + 'ms';
        t.textContent = 'L' + lvl + ' · ' + r + ' ' + unit;
        g.appendChild(t);
      }
    });

    var clock = document.getElementById('clock');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { clock.classList.add('is-live'); io.disconnect(); }
        });
      }, { threshold: 0.25 });
      io.observe(clock);
    } else {
      clock.classList.add('is-live');
    }
  }

  /* ---- podświetlenie aktywnej sekcji w szynie ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('#rail-list a'));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  if ('IntersectionObserver' in window && links.length && secs.every(Boolean)) {
    var seen = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting; });
      for (var i = 0; i < secs.length; i++) {
        var on = seen[secs[i].id] === true;
        links[i].classList.toggle('is-on', on);
        if (on) { for (var j = i + 1; j < links.length; j++) links[j].classList.remove('is-on'); break; }
      }
    }, { rootMargin: '-10% 0px -70% 0px' });
    secs.forEach(function (s) { spy.observe(s); });
  }

  /* ---- wybór sekcji na wąskim ekranie ---- */
  var sel = document.getElementById('jump-sel');
  if (sel) {
    sel.addEventListener('change', function () {
      var el = document.querySelector(sel.value);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ---- zmiana języka zachowuje aktualną sekcję ---- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-lang-link]'), function (a) {
    a.addEventListener('click', function () {
      if (location.hash) a.href = a.getAttribute('href').split('#')[0] + location.hash;
    });
  });
})();
