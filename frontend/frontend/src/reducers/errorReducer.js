import { GET_ERRORS, CLEAR_ERRORS } from "../actions/errorActions";

const intitialState = {
  msg: {},
  status: null,
  id: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intitialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };

    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
}