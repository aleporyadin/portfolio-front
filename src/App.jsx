import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import RouteSwitch from "./routes/RouteSwitch";

console.log(process.env)

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouteSwitch />
      </AuthProvider>
    </BrowserRouter>
  );
}
