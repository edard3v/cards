import A04 from "@pages/404/404";
import { CARDS } from "@pages/Cards/config";
import { ACCOUNT } from "@pages/Account/config";
import { HOME } from "@pages/Home/config";
import { PACKS } from "@pages/Packs/config";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <A04 />,
    children: [HOME, PACKS, CARDS, ACCOUNT],
  },
]);
