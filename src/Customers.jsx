import React, { useState } from "react";
import CustomerCard from "./CustomerCard";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [docs, setDocs] = useState("");

  const addCustomer = () => {
    if (name.trim() === "") return;
    setCustomers([...customers, { name, docs: docs.split(",") }]);
    setName("");
    setDocs("");
  };

  return (
    <div>
      <div className="mb-5">
        <input
          className="border p-2 mr-2"
          placeholder="שם לקוח"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          placeholder="מסמכים (מופרדים בפסיק)"
          value={docs}
          onChange={(e) => setDocs(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2" onClick={addCustomer}>
          הוסף לקוח
        </button>
      </div>

      <div className="grid gap-3">
        {customers.map((c, idx) => (
          <CustomerCard key={idx} customer={c} />
        ))}
      </div>
    </div>
  );
}

export default Customers;
