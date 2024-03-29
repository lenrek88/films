import { useEffect, useState } from "react";
import { Autocomplete, Checkbox, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function Genres() {
  const [genresList, setGenresList] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWVjYzlmZjljMTIxY2YwYmE4MmY3MTMwZDI3ZGM0ZSIsInN1YiI6IjY0ZGU1NDYzNTllOGE5MDBhYzA4YWVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pam84glnTcCGawnbZGp__aoXmtoPIa6DV-jHqO6z0bc";

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=ru", options)
      .then((response) => response.json())
      .then((response) => {
        setGenresList(response.genres);
      })
      .catch((err) => console.error(err));
  }, []);

  if (genresList) {
    return (
      <Box sx={{ width: "350px", mt: "20px" }}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={genresList}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.name}
            </li>
          )}
          style={{ width: "350px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Жанры"
              placeholder="Выберите жанры..."
            />
          )}
        />
      </Box>
    );
  }
}
