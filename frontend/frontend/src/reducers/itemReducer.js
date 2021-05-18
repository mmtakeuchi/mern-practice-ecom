import { init } from "../../../../models/User";
import {
  GET_ITEMS,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";

const intitialState = {
  items: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case UPDATE_ITEM:
      const { id, data } = action.payload;
      const items = state.items.map((item) =>
        item._id === id ? (item = data) : item
      );
      return {
        ...state,
        items: items,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
