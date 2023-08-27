import Home from "../component/Home";
import Explore from "../component/Explore";
import Profile from '../component/Profile'
import StoryScreen from '../component/StoryScreen'
let Routes = [
  { path: "/", element: <Home /> },
  { path: "/explore", element: <Explore /> },
  { path: "/profile", element: <Profile /> },
  { path: "/story-screen", element: <StoryScreen /> },


];
export default Routes;
