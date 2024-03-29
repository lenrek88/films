import "./App.css";
import Header from "../components/ui/header/header.jsx";
import { FilmProvider } from "../components/context/context.js";
import FilmCardInfo from "../components/ui/films/film_card_info.jsx";
import Content from "../components/ui/films/content.jsx";
import { Route, Routes } from "react-router-dom";
import GetToken from "../authorization/get_token.jsx";
import PostToken from "../authorization/post_token.jsx";
import getCookie from "../cookie/getCookie.js";

function App() {
  const Token = getCookie("userToken");

  return (
    <div className="App">
      <FilmProvider>
        <Header />
        {Token ? (
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Film/:id" element={<FilmCardInfo />} />
          </Routes>
        ) : null}
        <Routes>
          <Route path="/Registration" element={<GetToken />} />
          <Route path="/Authorisation" element={<PostToken />} />
        </Routes>
      </FilmProvider>
    </div>
  );
}

export default App;
