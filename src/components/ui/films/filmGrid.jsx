import { Box } from "@mui/material";
import FilmCard from "./filmCard";
import { useEffect, useState } from "react";
import { useFilms } from "../../context/context";
import getCookie from "../../../cookie/getCookie";

const Token = getCookie("userToken");

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${Token}`,
  },
};

export default function FilmGrid() {
  const filmContext = useFilms();
  const userId = getCookie("userId");

  const [favoriteMap, setFavoriteMap] = useState([{ id: 0 }]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/account/${userId}/favorite/movies`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        setFavoriteMap(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        alignContent: "flex-start",
        flex: "1 0 0",
        alignSelf: "stretch",
        flexWrap: "wrap",
        gap: "16px",
        ml: 1,
      }}
    >
      {filmContext
        ? filmContext.results.map((item) => {
            let isFavorite = favoriteMap.find((items) => items.id == item.id);
            console.log(filmContext.results);
            return (
              <FilmCard
                key={item.id}
                img={item.backdrop_path}
                title={item.title}
                vote_average={item.vote_average}
                itemId={item.id}
                isFavorite={isFavorite}
              ></FilmCard>
            );
          })
        : null}
    </Box>
  );
}
