import { ADD_FAV, REMOVE_FAV, GET_ALL_PRODUCTS, GET_ARTICLE_ID } from "../actions/actions";

const initialState = {
  myFavorites: [],
  allProducts: [],
  articleById: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((product) => product.id !== action.payload),
      };
    case GET_ARTICLE_ID:
      return {
        articleById: action.payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
