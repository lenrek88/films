import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function RangeSlider({ keyS }) {
  const [value, setValue] = useState([1987, 2001]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <Typography sx={{ mb: 6, mr: 35, mt: 2 }}>Год релиза:</Typography>
      <Box sx={{ width: 350, ml: 1 }}>
        <Slider
          min={1960}
          max={2030}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
        />
      </Box>
    </>
  );
}
