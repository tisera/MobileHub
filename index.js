document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('brand-search');
    const filterSelect = document.getElementById('brand-filter');
    const cards = Array.from(document.querySelectorAll('.nataliehome-card'));

    function normalize(text){
        return (text || '').toLowerCase();
    }

    function filterCards(){
        const q = normalize(searchInput.value.trim());
        const category = filterSelect.value;

        cards.forEach(card => {
            const brand = normalize(card.dataset.brand || card.querySelector('h4')?.textContent);
            const cat = (card.dataset.category || '');

            const matchesQuery = q === '' || brand.includes(q);
            const matchesCategory = category === 'all' || cat === category;

            card.style.display = (matchesQuery && matchesCategory) ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterCards);
    filterSelect.addEventListener('change', filterCards);

    // initial filter (in case user opens with query params later)
    filterCards();
});