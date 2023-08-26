import Home from "../component/Home";
import Explore from "../component/Explore";
import Profile from '../component/Profile'
let Routes = [
  { path: "/", element: <Home /> },
  { path: "/explore", element: <Explore /> },
  { path: "/profile", element: <Profile /> },

];
export default Routes;
