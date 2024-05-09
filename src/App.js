import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Main from "./pages/Main";
import DiceGame from "./pages/DiceGame";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "dicegame",
        element: <DiceGame />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
