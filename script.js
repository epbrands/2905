function addToCart(productName, productPrice) {
    const phoneNumber = "+919727930374"; // Replace with your WhatsApp number
    const message = `Hello, I am interested in purchasing:\n\nProduct: ${productName}\nPrice: ₹${productPrice}\n\nPlease contact me for further details.`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}
