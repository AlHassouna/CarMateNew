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
  showAllCart();
  //  renderer.renderAllCart(apiManager.data);
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
  await apiManager.getUser()
  renderer.renderMyProfile(apiManager.data)
}
