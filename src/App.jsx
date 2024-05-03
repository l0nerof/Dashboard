import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/income",
        element: <Income />,
      },
      {
        path: "/promote",
        element: <Promote />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
