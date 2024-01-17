const apiManager = new APIManager();
const renderer = new Renderer();
renderer.renderNavBar();

async function showAllServices() {
    await apiManager.getAllServices();
    renderer.renderAllServices(apiManager.data);
}

async function showAllUsers() {
    await apiManager.getAllUsers();
    renderer.renderAllUsers(apiManager.data);
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
    renderer.renderAllCart(apiManager.data);
    //  window.location.href = "../templates/cart.hbs";
}

function showAllPart() {
    apiManager.getAllParts();
    renderer.renderAllPart(apiManager.data);
}

function showcomplited() {
    apiManager.getMyServices();
    renderer.renderAllorders(apiManager.data);
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
