import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { BlogList } from "./components/BlogList";
import { BlogPost1 } from "./components/blog/BlogPost1";
import { BlogPost2 } from "./components/blog/BlogPost2";
import { BlogPost3 } from "./components/blog/BlogPost3";
import { BlogPost4 } from "./components/blog/BlogPost4";
import { BlogPost5 } from "./components/blog/BlogPost5";
import { BlogPost6 } from "./components/blog/BlogPost6";
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
  {
    path: "/blog/development-update-2",
    Component: BlogPost2,
  },
  {
    path: "/blog/3d-art-update-1",
    Component: BlogPost3,
  },
  {
        path: "/blog/3d-art-update-2",
    Component: BlogPost4,
  },
  {
    path: "/blog/development-update-3",
    Component: BlogPost5,
  },
  {
    path: "/blog/art-update-3",
    Component: BlogPost6,
  },
  {
    path: "/character/:slug", 
    Component: CharacterPage,
  },
]);
