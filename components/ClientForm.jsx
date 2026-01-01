import React, { useState } from "react";

export default function ClientForm({ addClient }) {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [vat, setVat] = useState(17);

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient({ name, documents: [document], vat });
    setName("");
    setDocument("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-2 border rounded">
      <input
        type="text"
        placeholder="שם לקוח"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 mr-2"
        required
      />
      <input
        type="text"
        placeholder="מסמך"
        value={document}
        onChange={(e) => setDocument(e.target.value)}
        className="border p-1 mr-2"
        required
      />
      <select
        value={vat}
        onChange={(e) => setVat(Number(e.target.value))}
        className="border p-1 mr-2"
      >
        <option value={0}>0%</option>
        <option value={17}>17%</option>
        <option value={18}>18%</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">
        הוסף לקוח
      </button>
    </form>
  );
}
