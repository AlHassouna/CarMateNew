class APIManager {
  /* ATTRIBUTES */
  #data = [];

  /* CONSTRUCTOR */
  constructor() {}

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

  getMyServices() {
    const apiUrl = `.../services/${userId}`;

  $.ajax({
    url: apiUrl,
    async: false,
    success: (orders) => {
        this.#data = orders;
    },
  });
 }

  

  get data() {
    return this.#data;
  }
}
