import { createContext, useContext, useReducer } from "react";

const FilmContext = createContext(null);

const FilmDispatchContext = createContext(null);

export function FilmProvider({ children }) {
  const [films, dispatch] = useReducer(filmReducer, initialFilms);

  return (
    <FilmContext.Provider value={films}>
      <FilmDispatchContext.Provider value={dispatch}>
        {children}
      </FilmDispatchContext.Provider>
    </FilmContext.Provider>
  );
}

export function useFilms() {
  return useContext(FilmContext);
}

export function useFilmsDispatch() {
  return useContext(FilmDispatchContext);
}

function filmReducer(films, action) {
  switch (action.type) {
    case "setFilms": {
      return { ...films, results: action.data };
    }
    case "setPage": {
      return { ...films, page: action.page };
    }

    default: {
      throw Error("Неизвесная операция: " + action.type);
    }
  }
}

const initialFilms = {
  page: 1,
  results: [],
};
