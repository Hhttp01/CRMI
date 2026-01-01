import React, { useState } from "react";

function CustomerCard({ customer }) {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="border p-3 rounded shadow">
      <h2 className="font-bold">{customer.name}</h2>
      <button
        className="text-blue-500 underline mt-2"
        onClick={() => setShowDocs(!showDocs)}
      >
        {showDocs ? "הסתר מסמכים" : "הצג מסמכים"}
      </button>
      {showDocs && (
        <ul className="mt-2 list-disc list-inside">
          {customer.docs.map((doc, idx) => (
            <li key={idx}>{doc}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomerCard;
