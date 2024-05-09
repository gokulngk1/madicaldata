// // RationaleForm.js
// import React, { useState } from 'react';

// const RationaleForm = ({ onSave }) => {
//   const [rationale, setRationale] = useState({ summary: '', text: '', decision: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRationale({ ...rationale, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(rationale);
//     setRationale({ summary: '', text: '', decision: '' });
//   };

//   return (
//     <div>
//       <h2>Add/Edit Rationale</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Rationale Summary:</label>
//           <input type="text" name="summary" value={rationale.summary} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Rationale Text:</label>
//           <textarea name="text" value={rationale.text} onChange={handleChange}></textarea>
//         </div>
//         <div>
//           <label>Decision Text:</label>
//           <input type="text" name="decision" value={rationale.decision} onChange={handleChange} />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default RationaleForm;


//  new one
// RationaleForm.js
import React, { useState } from 'react';
import './RationaleForm.css'; // Import CSS file for styling

const RationaleForm = ({ onSave }) => {
  const [rationale, setRationale] = useState({ summary: '', text: '', decision: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRationale({ ...rationale, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(rationale);
    setRationale({ summary: '', text: '', decision: '' });
  };

  return (
    <div className="rationale-form-container">
      <h2>Add/Edit Rationale</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rationale Summary:</label>
          <input type="text" name="summary" value={rationale.summary} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Rationale Text:</label>
          <textarea name="text" value={rationale.text} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Decision Text:</label>
          <input type="text" name="decision" value={rationale.decision} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default RationaleForm;

