const apiManager = new APIManager();
const renderer = new Renderer();
renderer.renderNavBar();

function showAllServices() {
    apiManager.getAllServices();
    renderer.renderAllServices(apiManager.data);
}

function showAllUsers() {
    apiManager.getAllUsers();
    renderer.renderAllUsers(apiManager.data);
}

function showAllPart() {
    apiManager.getAllParts();
    renderer.renderAllPart(apiManager.data);
}

function showMyTracking() {
    // const id = $("#track-id").val();
    apiManager.getTrackService("65a6fe043eee2d0d3e4b1c69");
    renderer.renderTrackService(apiManager.data);
}

function navigateToCart() {
    renderer.renderAllCart(apiManager.data);
    //  window.location.href = "../templates/cart.hbs";
}
