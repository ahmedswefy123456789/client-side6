// This file handles the checkout process, including form validation and simulating order submission. 
// It retrieves cart data and displays it in the summary.

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const summaryContainer = document.getElementById('summary');
    const form = document.getElementById('checkout-form');
    const totalPriceElement = document.getElementById('total-price');

    function displayCartSummary() {
        if (cartItems.length === 0) {
            summaryContainer.innerHTML = '<p>Your cart is empty.</p>';
            totalPriceElement.textContent = 'Total: $0.00';
            return;
        }

        let total = 0;
        summaryContainer.innerHTML = '';

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            summaryContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    function validateForm() {
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;

        if (!name || !email) {
            alert('Please fill in all fields.');
            return false;
        }

        return true;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateForm()) {
            alert('Order submitted successfully!');
            localStorage.removeItem('cart'); // Clear cart after submission
            window.location.href = 'index.html'; // Redirect to home page
        }
    });

    displayCartSummary();
});