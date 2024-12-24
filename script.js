// Modal popup functionality
const modal = document.getElementById('thank-you-modal');
const closeButton = document.getElementById('close-btn');

// Open modal after a delay
setTimeout(() => {
    modal.style.display = 'flex';
}, 3000);

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Search functionality (basic version)
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    const categories = document.querySelectorAll('.category-box h3');

    categories.forEach(category => {
        const text = category.textContent.toLowerCase();
        if (text.includes(query)) {
            category.parentElement.style.display = 'block';
        } else {
            category.parentElement.style.display = 'none';
        }
    });
});
