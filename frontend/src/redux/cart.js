const initialcart = {
    cart: [],
  };
  
  const syncData11 = (state = initialcart, action) => {
    switch (action.type) {
      case "addCart":
        return { cart: [[...action.payload], ...state.cart] };
      default:
        return state;
    }
  };
  export default syncData11;
  
  