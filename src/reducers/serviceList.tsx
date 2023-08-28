import { v4 as uuidv4 } from "uuid";
import { ADD_SERVICE, REMOVE_SERVICE } from "../actions/actionTypes";

const initialState = [
  { id: uuidv4(), name: "Аппаратная замена масла в АКПП", price: 5000 },
  { id: uuidv4(), name: "Диагностика подвески", price: 1000 },
];

export default function serviceListReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price, id } = action.payload;
      if (id) {
        const target: any = state.find((service) => service.id === id);
        target.name = name;
        target.price = price;
        return [...state];
      } else {
        return [...state, { id: uuidv4(), name, price: Number(price) }];
      }
    }

    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    default:
      return state;
  }
}
