
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/slots`)
      .then(response => setSlots(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Katch upp Slots</h1>
      <ul>
        {slots.map((slot, index) => (
          <li key={index}>{slot.time} in {slot.circle} - {slot.isPublic ? "Public" : "Private"}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
