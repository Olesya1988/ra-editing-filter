import { EDIT_SERVICE } from "../actions/actionTypes";

const initialState = {
  id: "",
};

export default function serviceEditReducer(state = initialState, action: any) {
  switch (action.type) {
    case EDIT_SERVICE:
      const { id } = action.payload;
      return { ...state, id };
    default:
      return state;
  }
}
