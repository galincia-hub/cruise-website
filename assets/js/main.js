/* cruise.co.kr — main.js */

// Itinerary toggle (product detail)
document.addEventListener('click', function(e) {
  var row = e.target.closest('.itinerary-row');
  if (row) {
    row.parentElement.classList.toggle('open');
  }
});

// Blog category tabs
document.querySelectorAll('.blog-cat-tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.blog-cat-tab').forEach(function(t) { t.classList.remove('active'); });
    this.classList.add('active');
  });
});

// Blog filter chips
document.querySelectorAll('.filter-chip').forEach(function(chip) {
  chip.addEventListener('click', function() {
    var row = this.closest('.filter-row');
    row.querySelectorAll('.filter-chip').forEach(function(c) { c.classList.remove('active'); });
    this.classList.add('active');
  });
});

// Voyage sticky section nav
(function() {
  var nav = document.getElementById('voyage-sticky-nav');
  if (!nav) return;
  var links = nav.querySelectorAll('.voyage-sticky-nav-links a');
  var ids = [];
  links.forEach(function(link) {
    var id = (link.getAttribute('href') || '').replace('#', '');
    if (id && document.getElementById(id)) ids.push(id);
  });
  function setActive() {
    var current = ids[0];
    var offset = 80;
    ids.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
    });
    links.forEach(function(link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + current);
    });
  }
  document.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();

// Hero carousel (simple auto-rotate dots)
(function() {
  var dots = document.querySelectorAll('.hero .dot');
  if (dots.length === 0) return;
  var idx = 0;
  setInterval(function() {
    dots.forEach(function(d) { d.classList.remove('active'); });
    idx = (idx + 1) % dots.length;
    dots[idx].classList.add('active');
  }, 6000);
})();
