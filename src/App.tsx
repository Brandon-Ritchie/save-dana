import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./lib/components/PageLayout.tsx";
import Root from "./routes/Root.tsx";
import Testimonial from "./routes/testimonials/[name]/IndividualTestimonial.tsx";
import Testimonials from "./routes/testimonials/Testimonials.tsx";

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
        path: "*",
        element: <Root />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
