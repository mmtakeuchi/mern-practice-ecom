import {
  GET_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CART_LOADING,
} from "../actions/types";

const intitialState = {
  cart: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case CART_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
