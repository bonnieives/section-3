import React from 'react'
import { useState } from 'react';

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Value: {someData}</p>
            <button onClick={() => someData = 15}>Change Variable</button>
        </div>
        <div>
            <p>Value: {number}</p>
            <button onClick={() => setNumber(25)}>This one really changes the variable</button>
        </div>
    </div>
  )
}

export default ManageData
