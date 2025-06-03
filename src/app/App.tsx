import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";

import { queryClient } from "./init/queryClient";
import { router } from "./init/router";
import "./styles/App.css";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    console.log('(.)(.)');
  }) 

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
