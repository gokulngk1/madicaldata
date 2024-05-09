// RationaleList.js
import React from 'react';

const RationaleList = ({ rationales, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Rationale List</h2>
      <ul>
        {rationales.map((rationale) => (
          <li key={rationale.RationaleID}>
            <div>
              <strong>Summary:</strong> {rationale.RationaleSummary}
            </div>
            <div>
              <strong>Text:</strong> {rationale.RationaleText}
            </div>
            <div>
              <strong>Decision:</strong> {rationale.Enable}
            </div>
            <button onClick={() => onEdit(rationale)}>Edit</button>
            <button onClick={() => onDelete(rationale.RationaleID)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RationaleList;
