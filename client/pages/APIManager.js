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
  async getAllServices() {
    const allServices = await $.ajax("http://localhost:4200/api/v1/services");
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

  async getUser(){
  try{
    const userData = (await $.ajax("http://localhost:4200/api/v1/users"))[1];
    const {__v,_id,updatedAt,role,password,...rest} = userData
    const objectCar = rest.car.car
    const {make,model,engine}= objectCar
    console.log(make,model,engine)
    const finalObject = {...rest,car : {make,model,engine}}
   console.log(finalObject);
   }catch (error) {
    console.error("Error fetching user data:", error);
   }
}


  getCartData() {
    return this.cartData;
  }

  get data() {
    return this.#data;
  }
}
