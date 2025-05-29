import "./styles/App.css";
import { router } from "./init/router";
import { RouterProvider } from "@tanstack/react-router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
