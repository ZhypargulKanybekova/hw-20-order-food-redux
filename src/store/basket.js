import { fetchRequest } from "../lib/fetchAPI";

const initialState = {
  basketData: [],
  totalAmount: 0,
  amount: 0,
};

export const basketActionTypes = {
  GET_BASKET: "GET_BASKET",
  INCREMENT_BASKET_ITEM: "INCREMENT_BASKET_ITEM",
  DECREMENT_BASKET_ITEM: "DECREMENT_BASKET_ITEM",
  DEELETE_BASKET_ITEM: "DELETE_BASKET_ITEM",
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionTypes.GET_BASKET:
      console.log(action.payload);

      return {
        ...state,
        basketData: action.payload,
      };

    case basketActionTypes.INCREMENT_BASKET_ITEM:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export function getBasket() {
  return async (dispatch) => {
    try {
      const responce = await fetchRequest("/basket");
      dispatch({
        type: basketActionTypes.GET_BASKET,
        payload: responce.items,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const updateBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchRequest(`/basketitem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await fetchRequest(`/basketitem/${id}/delete`, {
      method: "DELETE",
    });

    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};
