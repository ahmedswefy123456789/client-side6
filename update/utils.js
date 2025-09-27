function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

function getUniqueCategories(products) {
    const categories = products.map(product => product.category);
    return [...new Set(categories)];
}

export { formatPrice, validateEmail, debounce, getUniqueCategories };