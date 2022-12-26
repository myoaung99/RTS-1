import React, { useCallback, useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const addGuestHandler = useCallback(() => {
    setGuests((prevGuests) => [...prevGuests, name]);
    setName("");
  }, [setName, setGuests, name]);

  return (
    <div>
      <h3>GuestList</h3>
        {guests.map((guest, index)=><li key={index}>{guest}</li>)}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addGuestHandler}>Add Guest</button>
    </div>
  );
};

export default GuestList;
