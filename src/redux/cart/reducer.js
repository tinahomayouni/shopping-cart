import { ADD, REMOVE } from "./actions";

const initialState = {
  shoppingList: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        shoppingList: [
          ...state.shoppingList,
          { ...action.payload, quantity: 1 }
        ]
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
