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

  getTrackService(idx) {
    if (!this.#data) {
      $.ajax({
        url: "/apiv1/services", 
        async: false,
        success: (services) => {
          this.#data = services;
        },
      });
    }
    if (idx >= 0 && idx < this.#data.length) {
      return this.#data[idx];
    }
}

  get data() {
    return this.#data;
  }
}
