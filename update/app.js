const productListElement = document.getElementById('product-list');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');

let products = [];

// Fetch products from the API
async function loadProducts() {
    products = await fetchProducts();
    renderProducts(products);
}

// Render products to the DOM
function renderProducts(products) {
    productListElement.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="toggleFavorite(${product.id})">Favorite</button>
        `;
        productListElement.appendChild(productItem);
    });
}

// Search products
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});

// Filter products by category
categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const filteredProducts = selectedCategory ? 
        products.filter(product => product.category === selectedCategory) : 
        products;
    renderProducts(filteredProducts);
});

// Initialize the app
loadProducts();