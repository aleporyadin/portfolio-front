import React from "react";
import AuthProvider from "./provider/AuthProvider";
import RouteSwitch from "./routes/RouteSwitch";

export default function App() {
  return (
    <AuthProvider>
      <RouteSwitch />
    </AuthProvider>
  );
}
