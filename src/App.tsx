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
//         path: "*",
//         element: <Root />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "*",
    element: null,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
