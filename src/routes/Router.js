import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AgentProfile from "../layouts/AgentProfile.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Login = lazy(() => import("../layouts/Login.js"));
const AgentProflie = lazy(() => import("../layouts/AgentProfile.jsx"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/bi",
    element: <FullLayout />,
    children: [
      { path: "/bi/starter", exact: true, element: <Starter /> },
      {path:"/bi/profile",exact :true,element:<AgentProfile/>}
      // { path: "/about", exact: true, element: <About /> },
      // { path: "/alerts", exact: true, element: <Alerts /> },
      // { path: "/badges", exact: true, element: <Badges /> },
      // { path: "/buttons", exact: true, element: <Buttons /> },
      // { path: "/cards", exact: true, element: <Cards /> },
      // { path: "/grid", exact: true, element: <Grid /> },
      // { path: "/table", exact: true, element: <Tables /> },
      // { path: "/forms", exact: true, element: <Forms /> },
      // { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
  {path: "/",
  element: <Login />,
  children: [
    { path: "/", exact: true, element: <Navigate to ='/login'/> },
    { path: "/login", exact: true, element: <Login /> }
  ],
}

];


export default ThemeRoutes;
