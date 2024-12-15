import React from "react";
import Home from "./components/Home";
import { ThemeProvider } from "./context/ThemeContext";

const page = () => {
  return (
    <ThemeProvider>
      <main className="font-Roboto">
        <Home />
      </main>
    </ThemeProvider>
  );
};

export default page;
