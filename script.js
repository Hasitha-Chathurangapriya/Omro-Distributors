// Products Array (30 items with placeholder images)
const products = [
    { name: "Wheel Rim", price: "LKR 2500", image: "img/Wheel Rim.jpg" },
    { name: "Brake Pad", price: "LKR 1200", image: "img/Brake Pad.jpg" },
    { name: "Clutch Plate", price: "LKR 1800", image: "img/Gear Lever.jpg" },
    { name: "Gear Lever", price: "LKR 900", image: "img/Gear Lever.jpg" },
    { name: "Spark Plug", price: "LKR 300", image: "img/Spark Plug.jpg" },
    { name: "Oil Filter", price: "LKR 500", image: "img/Oil Filter.jpg" },
    // { name: "Air Filter", price: "LKR 600", image: "https://via.placeholder.com/150?text=Air+Filter" },
    // { name: "Headlight", price: "LKR 1500", image: "https://via.placeholder.com/150?text=Headlight" },
    // { name: "Tail Light", price: "LKR 800", image: "https://via.placeholder.com/150?text=Tail+Light" },
    // { name: "Side Mirror", price: "LKR 700", image: "https://via.placeholder.com/150?text=Side+Mirror" },
    // { name: "Fuel Tank Cap", price: "LKR 400", image: "https://via.placeholder.com/150?text=Fuel+Tank+Cap" },
    // { name: "Seat Cover", price: "LKR 1000", image: "https://via.placeholder.com/150?text=Seat+Cover" },
    // { name: "Handle Grip", price: "LKR 250", image: "https://via.placeholder.com/150?text=Handle+Grip" },
    // { name: "Exhaust Pipe", price: "LKR 3000", image: "https://via.placeholder.com/150?text=Exhaust+Pipe" },
    // { name: "Shock Absorber", price: "LKR 3500", image: "https://via.placeholder.com/150?text=Shock+Absorber" },
    // { name: "Brake Cable", price: "LKR 450", image: "https://via.placeholder.com/150?text=Brake+Cable" },
    // { name: "Throttle Cable", price: "LKR 400", image: "https://via.placeholder.com/150?text=Throttle+Cable" },
    // { name: "Battery", price: "LKR 5000", image: "https://via.placeholder.com/150?text=Battery" },
    // { name: "Horn", price: "LKR 600", image: "https://via.placeholder.com/150?text=Horn" },
    // { name: "Wheel Bearing", price: "LKR 800", image: "https://via.placeholder.com/150?text=Wheel+Bearing" },
    // { name: "Piston Ring", price: "LKR 1200", image: "https://via.placeholder.com/150?text=Piston+Ring" },
    // { name: "Cylinder Kit", price: "LKR 4500", image: "https://via.placeholder.com/150?text=Cylinder+Kit" },
    // { name: "Carburetor", price: "LKR 2000", image: "https://via.placeholder.com/150?text=Carburetor" },
    // { name: "Ignition Coil", price: "LKR 1500", image: "https://via.placeholder.com/150?text=Ignition+Coil" },
    // { name: "Starter Motor", price: "LKR 3000", image: "https://via.placeholder.com/150?text=Starter+Motor" },
    // { name: "Indicator Light", price: "LKR 500", image: "https://via.placeholder.com/150?text=Indicator+Light" },
    // { name: "Brake Shoe", price: "LKR 900", image: "https://via.placeholder.com/150?text=Brake+Shoe" },
    // { name: "Footrest", price: "LKR 600", image: "https://via.placeholder.com/150?text=Footrest" },
    // { name: "Mudguard", price: "LKR 1100", image: "https://via.placeholder.com/150?text=Mudguard" }
];

// Loader
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('d-none');
        document.getElementById('main-content').classList.remove('d-none');
    }, 2500);
};

// Display Products
let visibleItems = 6;
const productList = document.getElementById('product-list');
function displayProducts() {
    productList.innerHTML = '';
    for (let i = 0; i < Math.min(visibleItems, products.length); i++) {
        const product = products[i];
        productList.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-${i % 6}s">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-warning btn-custom" onclick="showOrderForm('${product.name}')">Order Now</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('see-more').style.display = visibleItems >= products.length ? 'none' : 'block';
}
displayProducts();

// See More
document.getElementById('see-more').addEventListener('click', () => {
    visibleItems += 6;
    displayProducts();
});

// Order Form
function showOrderForm(itemName) {
    document.getElementById('itemName').value = itemName;
    const modal = new bootstrap.Modal(document.getElementById('orderModal'));
    modal.show();
}

// Google Sheets Submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;

    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your Google Apps Script URL
    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({ itemName, customerName, customerPhone, customerAddress, timestamp: new Date() }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
        alert('Order submitted successfully!');
        bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
        document.getElementById('orderForm').reset();
    })
    .catch(err => alert('Error: ' + err));
});