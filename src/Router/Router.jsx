import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../HomeComponents/Home/Home";
import Landing from "../Components/Landing/Landing";
import Prayer from "../Components/NavberComponents/Prayer";
import Quran from "../Components/NavberComponents/Quran";
import Zikir from "../Components/NavberComponents/Zikir";
import Halal_Food from "../Components/NavberComponents/Halal_Food";
import Daily_Summary from "../Components/NavberComponents/Daily_Summary";
import Analytics from "../Components/NavberComponents/Analytics";
import Settings from "../Components/NavberComponents/Settings";
import Special_Modes from "../Components/NavberComponents/Special_Modes";
import Not_Found from "../Components/Error/Not_Found";
import PrayerDetails from "../Components/NavberComponents/PrayerDetails";
import Fajr from "../Components/NavberComponents/Fajr";
import Dhuhr from "../Components/NavberComponents/Dhuhr";
import Asr from "../Components/NavberComponents/Asr";
import Magrib from "../Components/NavberComponents/Magrib";
import Isha from "../Components/NavberComponents/Isha";
import Jumma from "../Components/NavberComponents/Jumma";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
      },
      {
        path: "prayer-tracking",
        element: <Prayer></Prayer>,
      },
      {
        path: "quran-spiritual",
        element: <Quran></Quran>,
      },

      { path: "fajr", element: <Fajr /> },
      { path: "dhuhr", element: <Dhuhr /> },
      { path: "asr", element: <Asr /> },
      { path: "maghrib", element: <Magrib /> },
      { path: "isha", element: <Isha /> },
      { path: "jumma", element: <Jumma /> },

      {
        path: "zikr-tasbih",
        element: <Zikir></Zikir>,
      },
      {
        path: "halal-food-tracker",
        element: <Halal_Food></Halal_Food>,
      },
      {
        path: "summary",
        element: <Daily_Summary></Daily_Summary>,
      },
      {
        path: "analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "Settings",
        element: <Settings></Settings>,
      },
      {
        path: "special-modes",
        element: <Special_Modes></Special_Modes>,
      },
    ],
  },
  {
    path: "*",
    element: <Not_Found></Not_Found>,
  },
]);

export default router;
