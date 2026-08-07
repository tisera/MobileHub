document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('brand-search');
    const filterSelect = document.getElementById('brand-filter');
    const cards = Array.from(document.querySelectorAll('.nataliehome-card'));

    function normalize(text){
        return (text || '').toLowerCase();
    }

    function filterCards(){
        if(!searchInput || !filterSelect) return;
        const q = normalize(searchInput.value.trim());
        const category = filterSelect.value;

        cards.forEach(card => {
            const brandAttr = normalize(card.dataset.brand || '');
            const titleText = normalize(card.querySelector('h4')?.textContent || '');
            const brand = (brandAttr + ' ' + titleText).trim();
            const cat = (card.dataset.category || '');

            const matchesQuery = q === '' || brand.includes(q);
            const matchesCategory = category === 'all' || cat === category;

            card.style.display = (matchesQuery && matchesCategory) ? '' : 'none';
        });
    }

    if (searchInput && filterSelect) {
        searchInput.addEventListener('input', filterCards);
        filterSelect.addEventListener('change', filterCards);
        // initial filter (in case user opens with query params later)
        filterCards();
    }
});