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

  getAllUsers() {
    $.ajax({
      url: "../../assets/users.json",
      async: false,
      success: (users) => {
        this.#data = users;
      },
    });
  }

  get data() {
    return this.#data;
  }
}
