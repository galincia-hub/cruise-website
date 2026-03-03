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
