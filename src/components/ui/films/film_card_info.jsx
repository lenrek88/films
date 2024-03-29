import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import getCookie from "../../../cookie/getCookie";

const Token = getCookie("userToken");

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${Token}`,
  },
};

export default function FilmCardInfo() {
  const Token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWVjYzlmZjljMTIxY2YwYmE4MmY3MTMwZDI3ZGM0ZSIsInN1YiI6IjY0ZGU1NDYzNTllOGE5MDBhYzA4YWVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pam84glnTcCGawnbZGp__aoXmtoPIa6DV-jHqO6z0bc";

  const { id } = useParams();

  const [state, setState] = useState("");
  const [state2, setState2] = useState("");
  const [isFavorite, setIsFavorite] = useState(true);
  const userId = getCookie("userId");

  function favoriteHandler() {
    const body = { media_type: "movie", media_id: id, favorite: isFavorite };
    setIsFavorite((isFavorite) => !isFavorite);
    const options2 = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify(body),
    };

    fetch(
      `https://api.themoviedb.org/3/account/${userId}/favorite`,
      options2
    ).catch((err) => {
      setIsFavorite((isFavorite) => !isFavorite);
      alert("Ошибка доавбления в избранное. Повторите попытку позднее.");
    });
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=ru`, OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        setState(response);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=ru`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        setState2(response);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/account/${userId}/favorite/movies`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        setIsFavorite(
          response.results.find((items) => items.id == id) ? false : true
        );
      })
      .catch((err) => console.error(err));
  }, []);

  const img = `https://image.tmdb.org/t/p/w500${state.poster_path}`;
  return (
    <div>
      {state ? (
        <div>
          <Box
            sx={{
              mx: "24px",
              my: "24px",
              display: "flex",
              alignItems: "flex-start",
              alignContent: "flex-start",
              flex: "1 0 0",
              alignSelf: "stretch",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <img src={img} alt="image poster" />
            <Box>
              <Box sx={{ display: "inline-flex", ml: "24px" }}>
                <Typography variant="h3">
                  {state.title} (
                  {state.release_date.substring(
                    0,
                    state.release_date.indexOf("-")
                  )}
                  )
                </Typography>

                <IconButton onClick={favoriteHandler}>
                  {isFavorite ? (
                    <StarIcon
                      sx={{ color: "#", width: "35px", height: "35px" }}
                    ></StarIcon>
                  ) : (
                    <StarIcon
                      sx={{ color: "#F9A825", width: "35px", height: "35px" }}
                    ></StarIcon>
                  )}
                </IconButton>
              </Box>
              <Box sx={{ ml: "12px", my: "20px" }}>
                <IconButton component={Link} to="/" sx={{ fontSize: "large" }}>
                  <ArrowBackIcon sx={{ width: "35px", height: "35px" }} />
                </IconButton>
              </Box>
              <Box sx={{ ml: "24px" }}>
                {state2
                  ? state2.cast
                      .slice(0, 5)
                      .map((item) => (
                        <Typography variant="h6">{item.name}</Typography>
                      ))
                  : null}
              </Box>
              <Box sx={{ mt: "80px", ml: "24px" }}>
                <Typography variant="h4">Детали</Typography>
              </Box>

              <Box sx={{ display: "inline-flex", ml: "12px", mt: "24px" }}>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }}>
                    <TableBody>
                      <TableRow>
                        <TableCell>Страна</TableCell>
                        <TableCell>
                          {state.production_countries[0].name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Год</TableCell>
                        <TableCell>
                          {state.release_date.substring(
                            0,
                            state.release_date.indexOf("-")
                          )}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Жанр</TableCell>
                        <TableCell>{state.genres[0].name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Режиссёр</TableCell>
                        <TableCell>
                          {state.production_countries[0].name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Сценарий</TableCell>
                        <TableCell>
                          {state.production_countries[0].name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Бюджет</TableCell>
                        <TableCell>{state.budget} $</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Зрители</TableCell>
                        <TableCell>{state.popularity}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Время</TableCell>
                        <TableCell>{state.runtime} минут</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </div>
      ) : null}
    </div>
  );
}
