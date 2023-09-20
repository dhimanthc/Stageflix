import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Boilerplate from "./components/Boilerplate.component";
import Home from "./components/Home.component";
import Login from "./components/viewer/Login.component";
import Register from "./components/viewer/Register.component";
import Play from "./components/play/Play.component";
import PlayView from "./components/play/PlayView.component";
import PlaySearch from "./components/play/PlaySearch.component";
import Musical from "./components/musical/Musical.component";
import MusicalView from "./components/musical/MusicalView.component";
import MusicalSearch from "./components/musical/MusicalSearch.component";
import Person from "./components/people/Person.component";
import NotFound from "./components/NotFound.component";
import ServerError from "./components/ServerError.component";
import TheatreView from "./components/theatre/TheatreView.component";
import Show from "./components/show/Show.component";
import ShowView from "./components/show/ShowView.component";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div
      className={
        isHomePage ? "home-background" : isAuthPage ? "auth-background" : ""
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shows" element={<Boilerplate component={<Show />} />} />
        <Route
          path="/shows/:id"
          element={<Boilerplate component={<ShowView />} />}
        />
        <Route
          path="/theatres/:id"
          element={<Boilerplate component={<TheatreView />} />}
        />
        <Route path="/plays" element={<Boilerplate component={<Play />} />} />
        <Route
          path="/plays/search/:id"
          element={<Boilerplate component={<PlaySearch />} />}
        />
        <Route
          path="/plays/:id"
          element={<Boilerplate component={<PlayView />} />}
        />
        <Route
          path="/musicals"
          element={<Boilerplate component={<Musical />} />}
        />
        <Route
          path="/musicals/search/:id"
          element={<Boilerplate component={<MusicalSearch />} />}
        />
        <Route
          path="/musicals/:id"
          element={<Boilerplate component={<MusicalView />} />}
        />
        <Route
          path="/people/:id"
          element={<Boilerplate component={<Person />} />}
        />
        <Route path="/error" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
