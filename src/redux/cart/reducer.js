import { ADD, REMOVE } from "./actions";

const initialState = {
  shoppingList: [],
  quantities: {}
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload],
        quantities: [...state.shoppingList, action.payload].reduce(
          (acc, item) => {
            const quantity = acc[item.id];
            quantity ? acc[item.id]++ : (acc[item.id] = 1);
            return acc;
          },
          {}
        )
      };
    }

    case REMOVE: {
      return {
        ...state,
        shoppingList: [
          state.shoppingList.filter(product => product.id !== action.payload)
        ]
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
