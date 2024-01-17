class APIManager {
    /* ATTRIBUTES */
    #data = [];

    /* CONSTRUCTOR */
    constructor() {
    }

    /* PRIVATE */

    get data() {
        return this.#data;
    }

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

    getTrackService(idx) {
        // if (!this.#data) {
        $.ajax({
            url: `/api/v1/orders/${idx}`,
            async: false,
            success: (services) => {
                console.log(services.carServices[0], "services")
                this.#data = services.carServices[0]
            },
        });
        // }
        if (idx >= 0 && idx < this.#data.length) {
            return this.#data[idx];
        }
    }
}
