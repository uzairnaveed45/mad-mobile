let cart = [];

// Add item function with validation
const addItemToCart = (productId, productName, quantity, price) => {
    if (!productId || !productName || !quantity || !price) {
        console.error('Invalid product data');
        return;
    }
    const product = { productId, productName, quantity, price };
    cart.push(product);
    console.log(`Added: ${productName} (Quantity: ${quantity}, Price: ${price})`);
};

// Remove item function with validation
const removeItemFromCart = (productId) => {
    const initialLength = cart.length;
    cart = cart.filter(item => item.productId !== productId);
    if (cart.length === initialLength) {
        console.error(`Product ID ${productId} not found`);
    } else {
        console.log(`Removed product with ID: ${productId}`);
    }
};

// Update item quantity function with validation
const updateItemQuantity = (productId, newQuantity) => {
    let itemFound = false;
    cart = cart.map(item => {
        if (item.productId === productId) {
            itemFound = true;
            return { ...item, quantity: newQuantity };
        }
        return item;
    });
    if (!itemFound) {
        console.error(`Product ID ${productId} not found`);
    } else {
        console.log(`Updated product with ID: ${productId}, new quantity: ${newQuantity}`);
    }
};

// Calculate total cost with validation
const calculateTotalCost = () => {
    if (cart.length === 0) {
        console.warn('Cart is empty');
        return 0;
    }
    const total = cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    return total;
};

// Display cart summary with validation
const displayCartSummary = () => {
    if (cart.length === 0) {
        console.warn('Cart is empty');
        return;
    }
    console.log('Cart Summary:');
    cart.forEach(item => {
        console.log(`Product: ${item.productName}, Quantity: ${item.quantity}, Price: $${item.price}`);
    });
    const totalCost = calculateTotalCost();
    console.log('Total Cost: $' + totalCost);
};

// Example Usage
addItemToCart(1, 'Laptop', 2, 1200);   // Add a product
addItemToCart(2, 'Smartphone', 1, 800); // Add another product

updateItemQuantity(2, 3);              // Update quantity of a product
removeItemFromCart(1);                 // Remove a product

displayCartSummary();                  // Display the cart
