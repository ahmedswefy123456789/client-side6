// cart.js

const cartKey = 'ecommerceCart';

export function getCartItems() {
    const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    return cartItems;
}

export function addToCart(product) {
    const cartItems = getCartItems();
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
        cartItems[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cartItems.push(product);
    }

    localStorage.setItem(cartKey, JSON.stringify(cartItems));
}

export function updateCartItemQuantity(productId, quantity) {
    const cartItems = getCartItems();
    const productIndex = cartItems.findIndex(item => item.id === productId);

    if (productIndex > -1) {
        if (quantity <= 0) {
            cartItems.splice(productIndex, 1);
        } else {
            cartItems[productIndex].quantity = quantity;
        }
    }

    localStorage.setItem(cartKey, JSON.stringify(cartItems));
}

export function clearCart() {
    localStorage.removeItem(cartKey);
}

export function calculateTotal() {
    const cartItems = getCartItems();
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}