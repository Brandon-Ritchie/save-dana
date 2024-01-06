import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./lib/components/PageLayout.tsx";
import Root from "./routes/Root.tsx";
import Testimonials from "./routes/testimonials/Testimonials.tsx";
import Testimonial from "./routes/testimonials/[name]/IndividualTestimonial.tsx";
import WhatCanIDo from "./routes/what-can-i-do/WhatCanIDo.tsx";
import WarOnMusic from "./routes/war-on-music/WarOnMusic.tsx";

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
        path: "/war-on-music",
        element: <WarOnMusic />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/testimonials/:name",
        element: <Testimonial />,
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
