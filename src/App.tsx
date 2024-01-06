import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./lib/components/PageLayout.tsx";
import Root from "./routes/Root.tsx";
import Testimonials from "./routes/testimonials/Testimonials.tsx";
import Testimonial from "./routes/testimonials/[name]/IndividualTestimonial.tsx";
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
