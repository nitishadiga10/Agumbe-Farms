import { createStore } from "redux";

const initialState = {
  showNotificationBar: false,
  showSideBar: false,
  imageIndex: 0,
  cart: [], //{ id: Math.random(), image, name, quantity, price }
};

const FarmsReducer = (state = initialState, action) => {
  if (action.type === "toggleNotificationBar") {
    return {
      showNotificationBar: !state.showNotificationBar,
      showSideBar: state.showSideBar,
      imageIndex: state.imageIndex,
      cart: state.cart,
    };
  }
  if (action.type === "toggleSideBar") {
    return {
      showNotificationBar: state.showNotificationBar,
      showSideBar: !state.showSideBar,
      imageIndex: state.imageIndex,
      cart: state.cart,
    };
  }
  if (action.type === "updateImageIndex") {
    return {
      showNotificationBar: state.showNotificationBar,
      showSideBar: state.showSideBar,
      imageIndex: action.payload,
      cart: state.cart,
    };
  }
  if (action.type === "addItem") {
    return {
      showNotificationBar: state.showNotificationBar,
      showSideBar: state.showSideBar,
      imageIndex: state.imageIndex,
      cart: [...state.cart, action.payload],
    };
  }
  if (action.type === "increaseQuantity") {
    return {
      showNotificationBar: state.showNotificationBar,
      showSideBar: state.showSideBar,
      imageIndex: state.imageIndex,
      cart: action.payload,
    };
  }
  if (action.type === "removeItem") {
    return {
      showNotificationBar: state.showNotificationBar,
      showSideBar: state.showSideBar,
      imageIndex: state.imageIndex,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  return state;
};

const store = createStore(FarmsReducer);

export default store;
