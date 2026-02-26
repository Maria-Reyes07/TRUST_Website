import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { BlogList } from "./components/BlogList";
import { BlogPost1 } from "./components/blog/BlogPost1";
import { CharacterPage } from './components/CharacterPage';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/blog",
    Component: BlogList,
  },
  {
    path: "/blog/development-update-1",
    Component: BlogPost1,
  },
  // {
  //   path: "/blog/art-of-horror",
  //   Component: BlogPost2,
  // },
  // {
  //   path: "/blog/sound-design-deep-dive",
  //   Component: BlogPost3,
  // },
  {
    path: "/character/:slug", 
    Component: CharacterPage,
  },
]);
