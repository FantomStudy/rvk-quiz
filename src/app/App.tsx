import { RouterProvider } from "@tanstack/react-router";

import { router } from "./init/router";
import "./styles/App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
