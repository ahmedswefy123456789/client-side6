// This file manages the favorites functionality, allowing users to favorite products and retrieve them from localStorage for display on the favorites page.

document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    function renderFavorites() {
        favoritesList.innerHTML = '';
        if (favorites.length === 0) {
            favoritesList.innerHTML = '<p>No favorites added yet.</p>';
            return;
        }

        favorites.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = product.name; // Assuming product has a name property
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeFavorite(product.id);
            listItem.appendChild(removeButton);
            favoritesList.appendChild(listItem);
        });
    }

    function removeFavorite(productId) {
        const updatedFavorites = favorites.filter(product => product.id !== productId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        renderFavorites();
    }

    renderFavorites();
});