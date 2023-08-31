let initialState = {
  allCharacters: [],
  myFavorites: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== Number(action.payload)
        ),
        allCharacters: state.allCharacters.filter(
          (character) => character.id !== Number(action.payload)
        ),
      };
    case "FILTER":
      const copia = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return { ...state, myFavorites: copia };
    case "ORDER":
      let copia2;
      if (action.payload === "Ascendentes") {
        copia2 = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        copia2 = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return { ...state, myFavorites: [...copia2] };
    case "RESET":
      return { ...state, myFavorites: state.allCharacters };
    default:
      return state;
  }
}
