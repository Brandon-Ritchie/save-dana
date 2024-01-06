import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./lib/components/PageLayout.tsx";
import Root from "./routes/Root.tsx";
import Testimonials from "./routes/testimonials/Testimonials.tsx";
import WhatCanIDo from "./routes/what-can-i-do/WhatCanIDo.tsx";

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
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/what-can-i-do",
        element: <WhatCanIDo />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
