let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartCount();
    displayCart();
}

// Function to update the cart count in the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to display cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous cart items

    let total = 0;
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${index + 1}. ${item.name} - $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        total += item.price;
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `Total: $${total}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at the specified index
    updateCartCount();
    displayCart(); // Re-render the cart
}

// Function to send cart details via WhatsApp and auto-reply with a thank you message
function sendCartDetails() {
    let cartDetails = 'Here are the items in your cart:\n\n';

    let total = 0;
    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
        total += item.price;
    });

    cartDetails += `\nTotal: $${total}`;
    cartDetails += `\n\nThank you for shopping with EP BRAND'S!`;

    const encodedMessage = encodeURIComponent(cartDetails);
    const phoneNumber = '+919727930374'; // Replace with your WhatsApp number or the desired number
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    // Auto-reply with thank you message
    autoReplyThankYou();
}

// Function to auto-reply with a thank you message
function autoReplyThankYou() {
    setTimeout(() => {
        const thankYouMessage = "Thank you for your order! We will process it shortly. Give me your contact details.";
        const encodedMessage = encodeURIComponent(thankYouMessage);
        const phoneNumber = '+919727930374'; // Replace with the user's WhatsApp number or your own
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    }, 2000); // Delay for auto-reply
}
