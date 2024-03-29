import { FormControl, Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useFilmsDispatch } from "../context/context";
import getCookie from "../../cookie/getCookie";

const Token = getCookie("userToken");

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${Token}`,
  },
};

export default function Find() {
  const [text, setText] = useState("");

  const filmDispatch = useFilmsDispatch();

  function findHandler(e) {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=ru&page=1`,
      OPTIONS
    )
      .then((response) => response.json())
      .then((data) => filmDispatch({ type: "setFilms", data: data.results }))
      .catch((err) => console.error(err));
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: 35,
        justifyContent: "space-between",
        padding: "16px",
        marginLeft: "50px",
        marginTop: "30px",
        marginBottom: "20px",
      }}
    >
      <FormControl onClick={findHandler}>
        <TextField
          fullWidth
          label="Название фильма"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></TextField>
        <Button type="sumbit">Поиск</Button>
      </FormControl>
    </Box>
  );
}
