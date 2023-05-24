import { fetchRequest } from "../lib/fetchAPI";
import { getBasket } from "./basket";

const initialState = {
  mealsData: [],
  isLoading: false,
};

export const GET_MEALS = "GET_MEALS";

export const GET_MEALS_PENDING = "GET_MEALS_PENDING";
export const GET_MEALS_SUCCESS = "GET_MEALS_SUCCESS";

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        isLoading: true,
        mealsData: action.payload,
      };

    case GET_MEALS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MEALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_MEALS_PENDING });
      const responce = await fetchRequest("/foods");
      dispatch({ type: GET_MEALS, payload: responce });
      dispatch({ type: GET_MEALS_SUCCESS });
    } catch (error) {
      new Error(error);
    }
  };
};

export function addToBasket(data) {
  return async (dispatch) => {
    try {
      fetchRequest(`/foods/${data.id}/addToBasket`, {
        method: "POST",
        body: { amount: data.amount },
      });
      dispatch(getBasket());
    } catch (error) {
      throw new Error(error);
    }
  };
}
