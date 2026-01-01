import React, { useState } from "react";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";

function App() {
  const [clients, setClients] = useState([]);

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">חשבוניות + CRM</h1>
      <ClientForm addClient={addClient} />
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
