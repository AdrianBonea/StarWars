import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppComponent from "./App";

function App() {
  return <AppComponent />;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);

// everything but favorite hero it is functional.
