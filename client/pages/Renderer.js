class Renderer {
  /* ATTRIBUTES */

  #partials = {};
  #templates = {
    navbar: null,
    admin: null,
    allServices: null,
    addService: null,
    serviceDetails: null,
    part: null,
    cart: null,
  };

  /* CONSTRUCTOR */
  constructor() {
    this.#compile();
    this.#registerHelpers();
    this.cartData = [];
    // this.#registerPartials();
  }

  /* PRIVATE */
  #setActiveNavItem() {}

  #registerHelpers() {
    Handlebars.registerHelper("multiply", (num1, num2) =>
      (num1 * num2).toFixed(2)
    );
    Handlebars.registerHelper("divide", (num1, num2) =>
      (num1 / num2).toFixed(5)
    );
  }

  #registerPartials() {
    for (const key of Object.keys(this.#partials)) {
      $.ajax({
        url: `../../templates/${key}.hbs`,
        dataType: "html",
        async: false,
        success: (source) => {
          this.#partials[key] = Handlebars.registerPartial(key, source);
        },
      });
    }
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
    // setActiveNavItem();
  }

  renderServiceDetails(service) {
    $("main").empty();
    $("main").append(this.#templates.serviceDetails(service));
  }

  renderAddService(service) {
    $("main").empty();
    $("main").append(this.#templates.addService(service));
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
}
