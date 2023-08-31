import "./App.css";
import { Link, NavLink, Navigate } from "react-router-dom";
import Routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import NavMenu from "./component/NavMenu";
import NavWeatherInfo from "./component/NavWeatherInfo";
import NavWeatherDays from "./component/NavWeatherDays";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <NavMenu></NavMenu>
        <NavWeatherInfo></NavWeatherInfo>
        <NavWeatherDays></NavWeatherDays>
      </div>
    </div>
  );
}

export default App;
