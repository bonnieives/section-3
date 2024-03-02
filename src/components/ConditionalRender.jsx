import React, { useState } from 'react'

function ConditionalRender() {
    const [x] = useState(true);

    const [myName, setName] = useState("Jose")

  return (
    <div>
      <h5>Will it be shown?</h5>
      {x && <p>Only if x is true.</p>}
      {!x && <p>Now x is false</p>}
      {myName === "Bonnie" ? (
        <div>The name is Bonnie</div>
      ) : (
        <div>Name not found</div>
      )}
      <button onClick={() => setName("Bonnie")}>Click me please?</button>
    </div>
  )
}

export default ConditionalRender
