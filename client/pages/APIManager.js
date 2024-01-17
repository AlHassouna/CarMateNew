class APIManager {
  /* ATTRIBUTES */
  #data = [];
  cartData = [];
  /* CONSTRUCTOR */
  constructor() {
    this.cartData = [];
  }

  /* PRIVATE */

  /* PUBLIC API */
  getAllServices() {
    $.ajax({
      url: "../../assets/services.json",
      async: false,
      success: (services) => {
        this.#data = services;
      },
    });
  }
  getAllParts() {
    $.ajax({
      url: "../../assets/parts.json",
      async: false,
      success: (parts) => {
        this.#data = parts;
      },
    });
  }
  getAllUsers() {
    $.ajax({
      url: "../../assets/users.json",
      async: false,
      success: (users) => {
        this.#data = users;
      },
    });
  }
  addToCart(part) {
    this.cartData.push(part);
  }

  getCartData() {
    return this.cartData;
  }
  get data() {
    return this.#data;
  }
}
