import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./lib/components/PageLayout.tsx";
import Root from "./routes/Root.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "*",
        element: <Root />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
