import  {FETCH_POKEMON_SUCCESS}  from "../actions/buscadorActions.js";
import  {FETCH_POKEMON_REQUEST}  from "../actions/buscadorActions.js";
import  {FETCH_POKEMON_FAIL}  from "../actions/buscadorActions.js";


const estadoInicial = {
  loading: false,
  pokemon: [],
  error: "",
};

 const buscador = (state = estadoInicial, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
        error: "",
      };
    case FETCH_POKEMON_FAIL:
      return {
        loading: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buscador