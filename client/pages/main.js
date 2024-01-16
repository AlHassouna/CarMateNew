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
