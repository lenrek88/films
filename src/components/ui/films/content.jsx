import Filters from "../filters/filters";
import FilmGrid from "./filmGrid";
import { Box } from "@mui/material";
export default function Content() {
  return (
    <>
      <Box
        sx={{ display: "flex", gap: "10px", height: "771px", padding: "24px" }}
      >
        <Filters />
        <FilmGrid />
      </Box>
    </>
  );
}
