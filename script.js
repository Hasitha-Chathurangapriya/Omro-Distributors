// Products Array 
const products = [
    { name: "AXEL BOOT 4S NM", price: "LKR 135", image: "img/Axel Boot 4S nm.png" },
    { name: "AXEL BOOT NT NO-01", price: "LKR 145", image: "img/AXEL BOOT NT NO-01.png" },
    { name: "AXEL BOOT NT NO-02", price: "LKR 145", image: "img/AXEL BOOT NT NO-02.png" },
    { name: "AXEL BOOT SYN BLK", price: "LKR 145", image: "img/AXEL BOOT SYN BLK.png" },
    { name: "AXEL BOOT TVS", price: "LKR 140", image: "img/AXEL BOOT TVS.png" },
    { name: "BAR RUBBER BLK", price: "LKR 460", image: "img/BAR RUBBER BLK.png" },
    { name: "BAR RUBBER WHT LINE", price: "LKR 790", image: "img/BAR RUBBER WHT LINE.png" },
    { name: "BAR RUBBER WHT LINE-CRUSH", price: "LKR 480", image: "img/BAR RUBBER WHT LINE-CRUSH.png" },
    { name: "BEADING ROLL 100 FT-WHT LINE", price: "LKR 19,305", image: "img/BEADING ROLL 100 FT-WHT LINE.png" },
    { name: "BEADINGROLL100FT-BLKLOCK BIG", price: "LKR 19,305", image: "img/BEADINGROLL100FT-BLKLOCK- BIG.png" },
    { name: "BEADINGROLL100FT-BLKLOCK SMALL", price: "LKR 19,305", image: "img/BEADINGROLL100FT-BLKLOCK- SMALL.png" },
    { name: "BIKE CARPET ACTIVA", price: "LKR ", image: "img/BIKE CARPET ACTIVA.png" },
    { name: "BIKE CARPET DASH", price: "LKR ", image: "img/BIKE CARPET DASH.png" },
    { name: "BIKE CARPET DIO", price: "LKR ", image: "img/BIKE CARPET DIO.png" },
    { name: "BIKE CARPET PLEASURE", price: "LKR ", image: "img/BIKE CARPET PLEASURE.png" },
    { name: "BIKE CARPET WEGO", price: "LKR ", image: "img/BIKE CARPET WEGO.png" },
    { name: "BOTTLE HOLDER-BLACK", price: "LKR 130", image: "img/BOTTLE HOLDER-BLACK.png" },
    { name: "BOTTLE HOLDER-BLUE", price: "LKR 135", image: "img/BOTTLE HOLDER-BLUE.png" },
    { name: "BOTTLE HOLDER-GREEN", price: "LKR 135", image: "img/BOTTLE HOLDER-GREEN.png" },
    { name: "BOTTLE HOLDER-RED", price: "LKR 135", image: "img/BOTTLE HOLDER-RED.png" },
    { name: "BRAKE PADDLE RUBBER-OM", price: "LKR 75", image: "img/BRAKE PADDLE RUBBER-OM.png" },
    { name: "BRAKE PADDLE RUBBER-NM", price: "LKR 68", image: "img/BRAKE PADDLE RUBBER-NM.png" },
    { name: "BRAKE PEDDLE RUBBER-2S", price: "LKR 68", image: "img/BRAKE PEDDLE RUBBER-2S.png" },
    { name: "BUMPER RUBBER", price: "LKR 53", image: "img/BUMPER RUBBER.png" },
    { name: "CABBY RUJBBER BEADING", price: "LKR 78", image: "img/CABBY RUJBBER BEADING.png" },
    { name: "COIL SPRING RUBBER", price: "LKR 26", image: "img/COIL SPRING RUBBER.png" },
    { name: "COUPLING RUBBER NORMAL BLK", price: "LKR 7", image: "img/COUPLING RUBBER NORMAL BLK.png" },
    { name: "COUPLIN RUBBER NORMAL GRN", price: "LKR 11", image: "img/COUPLIN RUBBER NORMAL GRN.png" },
    { name: "COUPLING RUBBER ARC", price: "LKR 7", image: "img/COUPLING RUBBER ARC.png" },
    { name: "COUPLING RUBBER ARC 2", price: "LKR 7", image: "img/COUPLING RUBBER ARC 2.png" },
    { name: "COUPLING RUBBER NT Blue-GRN", price: "LKR 12.50", image: "img/COUPLING RUBBER NT Blu.png" },
    { name: "DOOR VISOR", price: "LKR ", image: "img/DOOR VISOR.png" },
    { name: "DUST COVER", price: "LKR 14", image: "img/DUST COVER.png" },
    { name: "ENGINE MOUNT RUBBER", price: "LKR 38", image: "img/ENGINE MOUNT RUBBER.png" },
    { name: "FLOOR CARPET BAJAJ 2S FRONT", price: "LKR 1100", image: "img/FLOOR CARPET BAJAJ 2S FRONT.png" },
    { name: "FLOOR CARPET BAJAJ 4S FRONT", price: "LKR 1100", image: "img/FLOOR CARPET BAJAJ 4S FRONT.png" },
    { name: "FLOOR CARPET BAJAJ 4S FRONT NT", price: "LKR 1100", image: "img/FLOOR CARPET BAJAJ 4S FRONT NT.png" },
    { name: "FLOOR CARPET BAJAJ 2S REAR", price: "LKR 1100", image: "img/FLOOR CARPET BAJAJ 2S REAR.png" },
    { name: "FLOOR CARPET BAJAJ 4S REAR", price: "LKR 1100", image: "img/FLOOR CARPET BAJAJ 4S REAR.png" },
    { name: "FORK BOOT BLK SET 01", price: "LKR 270", image: "img/FORK BOOT BLK SET 01.png" },
    { name: "FRONT SHOCK TOP BUSH 5PT", price: "LKR 22", image: "img/FRONT SHOCK TOP BUSH 5PT.png" },
    { name: "FRONT SHOCK LOWER BUSH 3PT", price: "LKR 21", image: "img/FRONT SHOCK LOWER BUSH 3PT.png" },
    { name: "GRAB HANDLE BLK SET", price: "LKR ", image: "img/GRAB HANDLE BLK SET.png" },
    { name: "HANDLE GRIP BLK SET", price: "LKR 280", image: "img/HANDLE GRIP BLK SET.png" },
    { name: "HEAD LAMP COWLING BEADING-4S", price: "LKR 278", image: "img/HEAD LAMP COWLING  BEADING-4S.png" },
    { name: "HEAD LAMP COWLING BEADING-FL", price: "LKR 235", image: "img/HEAD LAMP COWLING  BEADING-FL.png" },
    { name: "HOOD CABBY LOCK", price: "LKR 30", image: "img/HOOD CABBY LOCK.png" },
    { name: "HOOD FRAME BRACKET", price: "LKR 107", image: "img/HOOD FRAME BRACKET.png" },
    { name: "HORN GUARD BEADING", price: "LKR 207", image: "img/HORN GUARD BEADING.png" },
    { name: "HANDLE BAR TOP COVER", price: "LKR 120", image: "img/HANDLE BAR TOP COVER.png" },
    { name: "HANDLE BAR POCKET COVER", price: "LKR ", image: "img/HANDLE BAR POCKET COVER.png" },
    { name: "JOINT BEADING FL", price: "LKR 390", image: "img/JOINT BEADING FL.png" },
    { name: "JOINT BEADING OM RUBBER", price: "LKR ", image: "img/JOINT BEADING OM RUBBER.png" },
    { name: "JOINT BEADING OM PLASTIC", price: "LKR ", image: "img/JOINT BEADING OM PLASTIC.png" },
    { name: "JOINT BEADING NM RUBBER", price: "LKR ", image: "img/JOINT BEADING NM RUBBER.png" },
    { name: "JOINT PLATED COVER SET", price: "LKR ", image: "img/JOINT PLATED COVER SET.png" },
    { name: "KICK BUSH", price: "LKR 18", image: "img/KICK BUSH.png" },
    { name: "KICK HANDLE CLIP", price: "LKR 90", image: "img/KICK HANDLE CLIP.png" },
    { name: "KICK STOP RUBBER", price: "LKR 92", image: "img/KICK STOP RUBBER.png" },
    { name: "MATTING LAGGAGE FL", price: "LKR 2980", image: "img/MATTING LAGGAGE FL.png" },
    { name: "M CHANNEL BEADING 100M", price: "LKR 4,800", image: "img/M CHANNEL BEADING 100M.png" },
    { name: "MUD FLAP BRACKET PLASTIC SET", price: "LKR 220", image: "img/MUD FLAP BRACKET PLASTIC SET.png" },
    { name: "MUD FLAP NORMAL BLK SET", price: "LKR 350", image: "img/MUD FLAP NORMAL BLK SET.png" },
    { name: "MUD FLAP NORMAL BLK HARD SET", price: "LKR 350", image: "img/MUD FLAP NORMAL BLK HARD SET.png" },
    { name: "MUD FLAP PRINTED RUBBER SET", price: "LKR ", image: "img/MUD FLAP PRINTED RUBBER SET.png" },
    { name: "SP MUD FLAP NORMAL BLK", price: "LKR ", image: "img/SP MUD FLAP NORMAL BLK.png" },
    { name: "SP BEADING-CRUSH", price: "LKR ", image: "img/SP BEADING-CRUSH.png" },
    { name: "SUN VISER STICKER CLASSIC", price: "LKR ", image: "img/SUN VISER STICKER CLASSIC.png" },
    { name: "NUMBER PLATE COVER SET", price: "LKR 980", image: "img/NUMBER PLATE COVER SET.png" },
    { name: "OUTER CASING-VIRGINE", price: "LKR 155", image: "img/OUTER CASING-VIRGINE.png" },
    { name: "PETROL COCK LEVER RUBBER", price: "LKR 8.5", image: "img/PETROL COCK LEVER RUBBER.png" },
    { name: "PETROL TANK CAP 4S", price: "LKR 107", image: "img/PETROL TANK CAP 4S.png" },
    { name: "PETROL TANK CAP 2S", price: "LKR 107", image: "img/PETROL TANK CAP 2S.png" },
    { name: "REAR DOOR HANDLE", price: "LKR 7", image: "img/REAR DOOR HANDLE.png" },
    { name: "REAR GLASS BEADING-SYN BLK", price: "LKR 920", image: "img/REAR GLASS BEADING-SYN BLK.png" },
    { name: "REAR GLASS BEADING-WHT LINE", price: "LKR 920", image: "img/REAR GLASS BEADING-WHT LINE.png" },
    { name: "REAR SHOCK LOW RUBBER BUSH NM", price: "LKR 76", image: "img/REAR SHOCK LOW RUBBER BUSH- NM.png" },
    { name: "REAR SHOCK TOP RUBBER BUSH BLK", price: "LKR 17", image: "img/REAR SHOCK TOP RUBBER BUSH- BLK.png" },
    { name: "REAR SHOCK TOP RUBBER BUSH GRN", price: "LKR 30", image: "img/REAR SHOCK TOP RUBBER BUSH- GRN.png" },
    { name: "RUBBER CHASI BELT SET", price: "LKR 750", image: "img/RUBBER CHASI BELT SET.png" },
    { name: "RUBBER KNOB REAR DOOR", price: "LKR 7", image: "img/RUBBER KNOB REAR DOOR.png" },
    { name: "SAFETY DOOR-NO 01", price: "LKR 390", image: "img/SAFETY DOOR-NO 01.png" },
    { name: "SAFETY DOOR-NO 02", price: "LKR 360", image: "img/SAFETY DOOR-NO 02.png" },
    { name: "SIDE BOARD SET", price: "LKR 495", image: "img/SIDE BOARD SET.png" },
    { name: "SAFETY KNOB", price: "LKR 4.5", image: "img/SAFETY KNOB.png" },
    { name: "SIDE MUDGUARD BEADING-SYN BLK", price: "LKR 320", image: "img/SIDE MUDGUARD BEADING-SYN BLK.png" },
    { name: "SIDE MIRROR ARM PLATIC", price: "LKR 365", image: "img/SIDE MIRROR ARM PLATIC.png" },
    { name: "SIDE MIRROR ARM SS", price: "LKR ", image: "img/SIDE MIRROR ARM SS.png" },
    { name: "TAIL LIGHT GLASS BEADING", price: "LKR 47", image: "img/TAIL LIGHT GLASS BEADING.png" },
    { name: "WINDSCREEN BEADING-4SNM BLK", price: "LKR 1820", image: "img/WINDSCREEN BEADING-4S NM BLK.png" },
    { name: "WINDSCREEN BEADING-SYN BLK", price: "LKR 2450", image: "img/WINDSCREEN_BEADING-SYN BLK.png" },
    { name: "WINDSCREEN BEADING-WHT LINE", price: "LKR 2450", image: "img/WINDSCREEN_BEADING-WHT LINE.png" },
    { name: "WIPER MOTOR COVER", price: "LKR 120", image: "img/WIPER MOTOR COVER.png" },
    { name: "UPPER TRIM DASH BOARD SET", price: "LKR 1150", image: "img/UPPER TRIM DASH BOARD SET.png" },
];

// Pagination Settings
const itemsPerPage = 9;
let currentPage = 1;
let filteredProducts = [...products];

// Loader
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('d-none');
        document.getElementById('main-content').classList.remove('d-none');
        displayProducts();
        setupPagination();
    }, 1500);
};

// Display Products
const productList = document.getElementById('product-list');
function displayProducts() {
    productList.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredProducts.slice(start, end);

    paginatedItems.forEach((product, i) => {
        productList.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-${i % 5}s">
                <div class="card">
                    <img src="${product.image}" class="card-img-top lazy" alt="${product.name}" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-warning btn-custom" onclick="showOrderForm('${product.name}')">Order Now</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Pagination
function setupPagination() {
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = `
        <nav>
            <ul class="pagination justify-content-center">
                ${Array.from({ length: pageCount }, (_, i) => `
                    <li class="page-item ${i + 1 === currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" onclick="changePage(${i + 1})">${i + 1}</a>
                    </li>
                `).join('')}
            </ul>
        </nav>
    `;
}

function changePage(page) {
    currentPage = page;
    displayProducts();
    setupPagination();
    window.scrollTo({ top: document.getElementById('products').offsetTop, behavior: 'smooth' });
}

// Filtering
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    currentPage = 1;
    displayProducts();
    setupPagination();
});

// Back to Top Logic
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show after 300px scroll
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Order Form
function showOrderForm(itemName) {
    document.getElementById('itemName').value = itemName;
    const modal = new bootstrap.Modal(document.getElementById('orderModal'));
    modal.show();
}

// Google Sheets Submission (Updated with FormData to fix CORS)
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxSidoO_xuT9RGsVf6U1qMZeHZJ1Fq877GpuH0V5w7qV_03eBN_r4Nw-5fUxHi4lRzGLw/exec';

    // Use FormData to avoid CORS preflight issues
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('customerName', customerName);
    formData.append('customerPhone', customerPhone);
    formData.append('customerAddress', customerAddress);
    formData.append('timestamp', new Date().toISOString());

    fetch(scriptURL, {
        method: 'POST',
        body: formData // No headers needed, FormData simplifies CORS
    })
    .then(response => response.json()) // Expect JSON response from Google Apps Script
    .then(data => {
        if (data.status === 'success') {
            alert('Order submitted successfully!');
            bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
            document.getElementById('orderForm').reset();
        } else {
            alert('Error submitting order.');
        }
    })
    .catch(err => alert('Error: ' + err.message));
});
