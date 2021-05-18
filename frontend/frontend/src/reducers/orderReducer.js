import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from "../actions/orderActions";

const intitialState = {
  orders: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    case CHECKOUT:
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };

    case ORDERS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
