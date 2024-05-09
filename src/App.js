// App.js
import React, { useState, useEffect } from 'react';
import RationaleForm from './RationaleForm';
import RationaleList from './RationaleList';

const App = () => {
  const [rationales, setRationales] = useState([]);
  const [editingRationale, setEditingRationale] = useState(null);

  useEffect(() => {
    fetchInitialData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const fetchInitialData = async () => {
    try {
      // Fetch initial JSON data
      const response = await fetch('initialData.json');
      if (!response.ok) {
        throw new Error('Failed to fetch initial data');
      }
      const data = await response.json();
      setRationales(data.Rationale);
    } catch (error) {
      console.error('Error fetching initial data:', error);
    }
  };

  const saveRationale = (newRationale) => {
    if (!editingRationale) {
      newRationale.id = Date.now();
      setRationales([...rationales, newRationale]);
    } else {
      const updatedRationales = rationales.map((r) => (r.RationaleID === editingRationale.RationaleID ? newRationale : r));
      setRationales(updatedRationales);
      setEditingRationale(null);
    }
  };

  const editRationale = (rationale) => {
    setEditingRationale(rationale);
  };

  const deleteRationale = (id) => {
    const updatedRationales = rationales.filter((r) => r.RationaleID !== id);
    setRationales(updatedRationales);
  };

  return (
    <div>
      <h1>Madical Data</h1>
      <RationaleForm onSave={saveRationale} />
      <RationaleList rationales={rationales} onEdit={editRationale} onDelete={deleteRationale} />
    </div>
  );
};

export default App;
