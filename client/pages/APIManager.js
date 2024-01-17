class APIManager {
  /* ATTRIBUTES */
  #data = [];

  /* CONSTRUCTOR */
  constructor() {
    this.cartData = [];
  }

  get data() {
    return this.#data;
  }

  /* PRIVATE */
  #calcTotal(cost, amount, discount) {
    const origin = cost * amount;
    return origin - origin * (discount / 100);
  }

  /* PUBLIC API */
  async getAllServices() {
    const allServices = await $.ajax("/api/v1/services");
    this.#data = allServices.map((service) => {
      const { id, ...details } = service.details;
      return {
        _id: service._id.slice(-5),
        name: service.name,
        cost: service.cost,
        currency: service.currency,
        image: service.image,
        details: details,
        servicesIncluded: service.servicesIncluded,
      };
    });
  }

  async getAllParts() {
    const allParts = await $.ajax("/api/v1/parts");
    this.#data = allParts;
  }

  getAllUsers() {
    $.ajax({
      url: "/api/v1/users",
      async: false,
      success: (users) => {
        this.#data = users;
      },
    });
  }

  addToCart(part) {
    this.cartData.push(part);
  }

  async getUser() {
    const user = (await $.ajax("/api/v1/users"))[1];
    const userDetails = {};
    userDetails._id = user._id;
    userDetails.car = {
      make: user.car.car.make,
      model: user.car.car.model,
      year: user.car.car.year,
      image: user.car.car.image,
      LPN: user.car.LPN,
    };
    userDetails.name = `${user.name.first} ${user.name.last}`;
    userDetails.orders = user.orders
      .map((o) => {
        return {
          _id: o._id,
          date: new Date(o.date).toLocaleDateString(),
          total: o.total,
          status: o.status,
        };
      })
      .sort((o1, o2) => o1.date - o2.date);
    this.#data = userDetails;
  }

  async getOrder(orderId) {
    const order = await $.ajax(`/api/v1/orders/${orderId}`);
    const orderDetails = {
      _id: order._id,
      status: order.status,
      date: new Date(order.date).toLocaleDateString(),
      address: `${order.address.city}, ${order.address.street}`,
      carParts: order.carParts.map((p) => {
        return {
          partID: p.item._id,
          name: p.item.name,
          image: p.item.image,
          currency: p.item.currency,
          total: this.#calcTotal(p.item.cost, p.amount, p.discount),
          status: p.status,
        };
      }),
      carServices: order.carServices.map((s) => {
        return {
          serviceID: s.item._id,
          name: s.item.name,
          currency: s.item.currency,
          total: this.#calcTotal(s.item.cost, s.amount, s.discount),
          status: s.status,
        };
      }),
    };

    orderDetails.total = [...orderDetails.carParts, ...orderDetails.carServices]
      .map((i) => i.total)
      .reduce((a, b) => a + b)
      .toFixed(2);

    this.#data = orderDetails;
  }

  getCartData() {
    return this.cartData;
  }

  filterPartsByCategory(category) {
    $.ajax({
      url: "/api/v1/parts/category/" + category,
      async: false,
      success: (parts) => {
        this.#data = parts;
      },
    });
  }
  RemoveFromCart(name) {
    fetch("http://localhost:4200/removeFromCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Item removed from the cart");
        } else {
          console.error("Failed to remove item from the cart:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error removing item from the cart:", error);
      });
  }
}
