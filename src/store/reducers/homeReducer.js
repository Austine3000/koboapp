import { GET_ALL_GRAPH_CONTENT } from "../actions/actionTypes";

const initialState = {
  graphdata: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_GRAPH_CONTENT:
      return {
        ...state,
        graphdata: action.data
      };
    default:
      return state;
  }
};
