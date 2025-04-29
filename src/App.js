import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({
    time: '',
    circle: '',
    isPublic: false
  });

  // Fetch existing slots
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/slots`)
      .then(response => setSlots(response.data))
      .catch(err => console.error(err));
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewSlot({
      ...newSlot,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission to add a new slot
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/slots`, newSlot)
      .then(response => {
        setSlots([...slots, response.data]);
        setNewSlot({ time: '', circle: '', isPublic: false });  // Reset form
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Katchupp Slots</h1>

      {/* Form to add a new slot */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={newSlot.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Circle:</label>
          <input
            type="text"
            name="circle"
            value={newSlot.circle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Is Public?</label>
          <input
            type="checkbox"
            name="isPublic"
            checked={newSlot.isPublic}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Slot</button>
      </form>

      {/* List of slots */}
      <ul>
        {slots.map((slot, index) => (
          <li key={index}>
            {slot.time} in {slot.circle} - {slot.isPublic ? "Public" : "Private"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
