import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from './actionTypes';

const initialState = {
  cart: [],
};

function addToCart(state, action) {
  const existingProduct = state.cart.find(
    (item) => item.id === action.payload.product.id
  );
  // eğer ürün var ise quantity arttır.
  if (existingProduct) {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  } else {
    // yeni  ürün ekle
    return {
      ...state,
      cart: [...state.cart, { ...action.payload.product, quantity: 1 }],
    };
  }
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case REMOVE_FROM_CART:
      const remainingItems = state.cart.filter(
        (item) => item.id !== action.payload.productId
      );
      return {
        ...state,
        cart: remainingItems,
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
