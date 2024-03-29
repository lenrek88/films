import { Pagination, Box } from "@mui/material";
import { useFilms, useFilmsDispatch } from "../../context/context";

export default function Paginations() {
  const filmContext = useFilms();
  const filmDispatchContext = useFilmsDispatch();

  function handleChange(event, value) {
    filmDispatchContext({ type: "setPage", page: value });
  }

  return (
    <Box sx={{ mt: "330px" }}>
      <Pagination
        count={500}
        color="primary"
        page={filmContext.page}
        onChange={handleChange}
      />
    </Box>
  );
}
