import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <PageLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Root />,
//       },
//       {
//         path: "/war-on-music",
//         element: <WarOnMusic />,
//       },
//       {
//         path: "/testimonials",
//         element: <Testimonials />,
//       },
//       {
//         path: "/testimonials/:name",
//         element: <Testimonial />,
//       },
//       {
//         path: "/what-can-i-do",
//         element: <WhatCanIDo />,
//       },
//     ],
//   },
// ]);

// This is in response to the current faculty requesting to have the site removed, at least temporarily.
const router = createBrowserRouter([
  {
    path: "*",
    element: null,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
