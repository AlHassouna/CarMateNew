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
function AddToCart() {
  const partIndex = $(event.target).data("part-index");
  apiManager.addToCart(partIndex);
}
function showAllCart() {
  renderer.renderAllCart(renderer.getCartData());
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
function filterByCategory() {
  var selectedCategory = document.getElementById("categoryFilter").value;
  var parts = document.getElementsByClassName("part-minicard");

  for (var i = 0; i < parts.length; i++) {
    var category = parts[i].getAttribute("data-category");

    if (selectedCategory === "" || selectedCategory === category) {
      parts[i].style.display = "block";
    } else {
      parts[i].style.display = "none";
    }
  }
}

function resetCategoryFilter() {
  var categoryFilter = document.getElementById("categoryFilter");
  categoryFilter.selectedIndex = -1;
  filterByCategory();
  searchByPartName();
}
