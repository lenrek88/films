import { Box, Card, CardMedia, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function FilmCard({
  img,
  title,
  vote_average,
  itemId,
  isFavorite,
}) {
  const itId = `/Film/${itemId}`;

  return (
    <>
      <Link to={itId} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            display: "flex",
            width: "460px",
            flexDirection: "column",
            alignItems: "flexStart",
            gap: "16px",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
            }}
          >
            <CardMedia
              component="img"
              height="289"
              image={`https://image.tmdb.org/t/p/w500${img}`}
              alt="img"
            />

            <CardHeader
              sx={{
                display: "flex",
                alignSelf: "stretch",
                alignItems: "center",
                padding: "16px",
              }}
              title={title}
              subheader={`Рейтинг: ${vote_average}`}
              action={
                <IconButton>
                  {isFavorite ? (
                    <StarIcon sx={{ color: "#F9A825" }}></StarIcon>
                  ) : (
                    <StarIcon></StarIcon>
                  )}
                </IconButton>
              }
            ></CardHeader>
          </Card>
        </Box>
      </Link>
    </>
  );
}
