const apiManager = new APIManager();
const renderer = new Renderer();
renderer.renderNavBar();

async function showAllServices() {
  await apiManager.getAllServices();
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
function navigateToCart() {
  renderer.renderAllCart(apiManager.data);
  //  window.location.href = "../templates/cart.hbs";
}
