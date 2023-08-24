import "./App.css";
import { Link, NavLink, Navigate } from "react-router-dom";
import Routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
// bt components
import Alert from "react-bootstrap/Alert";
// icons
import { FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function App() {
  const router = useRoutes(Routes);
  return (
    <div className="App">
      <div className="route-pages">{router}</div>
      <div className="select-page-nav">
        <NavLink to={"/"}>
          <FaHome />
        </NavLink>
        <NavLink to={"/explore"}>
          <MdExplore />
        </NavLink>
        <NavLink to={"/profile"}>
          <CgProfile />
        </NavLink>
      </div>
    </div>
  );
}

export default App;
