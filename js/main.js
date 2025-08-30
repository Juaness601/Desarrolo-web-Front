// Filtrado de portafolio
document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(function(b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-item').forEach(function(item) {
            if (filter === 'all') {
                item.style.display = '';
            } else {
                item.style.display = (item.getAttribute('data-category') === filter) ? '' : 'none';
            }
        });
    });
});