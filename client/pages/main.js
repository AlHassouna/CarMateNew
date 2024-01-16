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

function showMyServices(){
  const service = {
    name: "Car Maintenance",
    cost: 1250,
    currency: "₪",
    image: "https://shorturl.at/kGJK4",
    status: "ready"
  };
  // apiManager.getTrackService();
  renderer.renderTrackService(service);
}

