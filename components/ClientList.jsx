import React, { useState } from "react";

export default function ClientList({ clients }) {
  const [showDocs, setShowDocs] = useState({});

  const toggleDocs = (index) => {
    setShowDocs({ ...showDocs, [index]: !showDocs[index] });
  };

  return (
    <div>
      {clients.map((client, index) => (
        <div key={index} className="mb-4 p-2 border rounded">
          <h2 className="font-bold">{client.name}</h2>
          <button
            onClick={() => toggleDocs(index)}
            className="bg-gray-200 px-2 py-1 rounded mt-1"
          >
            {showDocs[index] ? "הסתר מסמכים" : "הצג מסמכים"}
          </button>
          {showDocs[index] && (
            <ul className="ml-4 mt-2">
              {client.documents.map((doc, i) => (
                <li key={i}>
                  {doc} | מע"מ: {client.vat}% | 
                  <button className="ml-2 bg-green-200 px-1 rounded">שיתוף</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
