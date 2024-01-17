const apiManager = new APIManager();
const renderer = new Renderer();

async function showAllServices() {
    await apiManager.getAllServices();
    renderer.renderAllServices(apiManager.data);
}

function showAllUsers() {
    apiManager.getAllUsers();
    renderer.renderAllUsers(apiManager.data);
}

async function showAllPart() {
    await apiManager.getAllParts();
    renderer.renderAllPart(apiManager.data);
}

async function showOrderedServiceDetails(idx, carImg) {
    const {date} = apiManager.data;
    const service = apiManager.data.carServices[idx];
    await showMyTracking({date, carImg, ...service})
}

async function showMyTracking(service) {
    renderer.renderTrackService(service);
}


function navigateToCart() {
    showAllCart();
}

function AddToCart() {
    const partIndex = $(event.target).data("part-index");
    apiManager.addToCart(partIndex);
}

function showAllCart() {
    renderer.renderAllCart(renderer.getCartData());
}

async function showMyProfile() {
    await apiManager.getUser();
    renderer.renderMyProfile(apiManager.data);
}

async function showMyOrder(idx) {
    const userID = apiManager.data._id;
    const orderId = apiManager.data.orders[idx]._id;
    const carImg = apiManager.data.car.image;
    await apiManager.getOrder(orderId); //populated order
    renderer.renderMyOrder({userID, carImg, ...apiManager.data});
}

function searchByPartName() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var parts = document.getElementsByClassName("part-minicard");

    for (var i = 0; i < parts.length; i++) {
        var partName = parts[i].querySelector("h2").textContent.toLowerCase();

        if (partName.includes(searchInput)) {
            parts[i].style.display = "block";
        } else {
            parts[i].style.display = "none";
        }
    }
}

function removeFromCart(itemName) {
    cartItems = cartItems.filter((item) => item.name !== itemName);
    renderer.renderCart(); // Update the cart UI
    console.log(`${itemName} removed from the cart`);
}

async function filterByCategory() {
    let selectedCategory = document.getElementById("categoryFilter").value;
    if (selectedCategory === "All Categories") {
        await showAllPart();
        return;
    }
    apiManager.filterPartsByCategory(selectedCategory);
    renderer.renderAllPart(apiManager.data);
    $("#categoryFilter").val(selectedCategory);
}

function calculateSubtotal() {
    return cartItems.reduce((total, item) => total + item.cost, 0);
}
