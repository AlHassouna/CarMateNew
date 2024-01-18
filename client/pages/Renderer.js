class Renderer {
  /* ATTRIBUTES */
  #templates = {
    navbar: null,
    admin: null,
    allServices: null,
    addService: null,
    serviceDetails: null,
    myProfile: null,
    myOrder: null,
    part: null,
    cart: null,
    trackService: null,
  };

  /* CONSTRUCTOR */
  constructor() {
    this.#compile();
    this.#registerHelpers();
    this.cartData = [];
  }

  #registerHelpers() {
    Handlebars.registerHelper("multiply", (num1, num2) =>
      (num1 * num2).toFixed(2)
    );
    Handlebars.registerHelper("divide", (num1, num2) =>
      (num1 / num2).toFixed(5)
    );
    Handlebars.registerHelper("slice", (id) => id.slice(-5));
  }

  /* PUBLIC API */
  #compile() {
    for (const key of Object.keys(this.#templates)) {
      $.ajax({
        url: `../../templates/${key}.hbs`,
        dataType: "html",
        async: false,
        success: (source) => {
          this.#templates[key] = Handlebars.compile(source);
        },
      });
    }
  }

  renderNavBar() {
    $("body").append(this.#templates.navbar({}));
  }

  renderAllServices(services) {
    $("main").empty();
    $("main").append(this.#templates.allServices({ services }));
  }

  renderServiceDetails(service) {
    $("main").empty();
    $("main").append(this.#templates.serviceDetails(service));
  }

  renderAddService(service) {
    $("main").empty();
    $("main").append(this.#templates.addService(service));
  }

  renderMyProfile(profile) {
    $("main").empty();
    $("main").append(this.#templates.myProfile(profile));
  }

  renderMyOrder(order) {
    $("main").empty();
    $("main").append(this.#templates.myOrder(order));
  }

  renderAllUsers(users) {
    $("main").empty();
    $("main").append(this.#templates.admin(users));
  }

  renderAllPart(parts) {
    $("main").empty();
    $("main").append(this.#templates.part({ parts }));

    const renderer = this; // Save a reference to the current renderer instance

    $(".add-to-cart-button").on("click", function () {
      const partIndex = $(this).data("part-index");
      const selectedPart = parts[partIndex];
      renderer.addToCart(selectedPart); // Use the saved reference to call addToCart
      renderer.renderAllCart(renderer.getCartData());
    });
  }

  addToCart(part) {
    this.cartData.push(part);
  }

  getCartData() {
    return this.cartData;
  }

  renderAllCart(carts) {
    $("main").empty();
    $("main").append(this.#templates.cart({ carts }));
  }

  removeFromCart(partName) {
    const partIndex = cartItems.findIndex((item) => item.name === partName);
    if (partIndex !== -1) {
      cartItems.splice(partIndex, 1);
      updateCart();
    }
  }

  renderTrackService(service) {
    $("main").empty();
    $("main").append(this.#templates.trackService(service));
    colorCircle(service.status);
  }

  renderAllorders(orders) {
    $("main").empty();
    $("main").append(this.#templates.orders({ orders }));
  }

  renderCart() {
    const cartContainer = document.querySelector(".Cart-Items");
    cartContainer.innerHTML = "";

    cartItems.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("Cart-Item");

      // ... (Add logic to create the cart item HTML structure)

      cartContainer.appendChild(cartItemElement);
    });

    const subtotalElement = document.querySelector(".Subtotal");
    subtotalElement.textContent = `Sub-Total: ${calculateSubtotal()}{{currency}} (${
      cartItems.length
    } items)`;
  }

  updateCart() {
    const totalCost = cartItems.reduce((total, item) => total + item.cost, 0);
    const totalItems = cartItems.length;

    document.querySelector(
      ".Subtotal"
    ).textContent = `Sub-Total: ${totalCost}${currency} (${totalItems} items)`;

    const cartContainer = document.querySelector(".Cart-Items");
    cartContainer.innerHTML = "";

    cartItems.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.className = "Cart-Item";
      cartContainer.appendChild(cartItemElement);
    });
  }
  subtotal() {
    const subtotal = cart.reduce((acc, item) => acc + item.cost, 0);
    console.log(subtotal);
  }
}
