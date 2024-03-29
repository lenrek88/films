import {
  Paper,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function GetToken() {
  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          width: "444px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Dialog open={true}>
          <DialogTitle>{"Запросить токен"}</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ width: "422px" }}
              autoFocus
              fullWidth
              label="Почта"
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Link to="/">
              <Button>Отмена</Button>
            </Link>
            <Link to="/Authorisation">
              <Button>Запросить</Button>
            </Link>
          </DialogActions>
        </Dialog>
      </Box>
    </Paper>
  );
}
