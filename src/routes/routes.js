import Home from "../component/Home";
import Explore from "../component/Explore";
import Profile from '../component/Profile'
import StoryScreen from '../component/StoryScreen'
import Post from "../component/Post";
let Routes = [
  { path: "/", element: <Home /> },
  { path: "/explore", element: <Explore /> },
  { path: "/profile", element: <Profile /> },
  { path: "/story-screen/:storyId", element: <StoryScreen /> },
  { path: "/post/:id", element: <Post /> },



];
export default Routes;
