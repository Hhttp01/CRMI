import React, { useState } from "react";
import Customers from "./Customers";

function App() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">מערכת CRM + חשבוניות</h1>
      <Customers />
    </div>
  );
}

export default App;
