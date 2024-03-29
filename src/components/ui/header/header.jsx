import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import getCookie from "../../../cookie/getCookie";

export default function Header() {
  const Token = getCookie("userToken");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ mr: "180vh" }}>
            Фильмы
          </Typography>
          {Token ? (
            <IconButton sx={{ color: "white" }}>
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
          ) : (
            <Link to="/Registration">
              <IconButton sx={{ color: "white" }}>
                <AccountCircleIcon></AccountCircleIcon>
              </IconButton>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
