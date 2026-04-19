import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Factory } from "./pages/Factory";
import { Contact } from "./pages/Contact";
import { RootLayout } from "./layouts/RootLayout";

import { AltinSusamliTahinPage } from "./pages/AltinSusamliTahinPage";
import { PekmezPage } from "./pages/PekmezPage";
import { LokumPage } from "./pages/LokumPage";
import { TahinHelvasiPage } from "./pages/TahinHelvasiPage";
import { OzelLezzetlerPage } from "./pages/OzelLezzetlerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "about", Component: About },
      { path: "factory", Component: Factory },
      { path: "contact", Component: Contact },

      { path: "products/altin-susamli-tahin", Component: AltinSusamliTahinPage },
      { path: "products/pekmez", Component: PekmezPage },
      { path: "products/lokum", Component: LokumPage },
      { path: "products/tahin-helvasi", Component: TahinHelvasiPage },
      { path: "products/ozel-lezzetler", Component: OzelLezzetlerPage },
    ],
  },
]);