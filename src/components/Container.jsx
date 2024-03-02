import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
      <h2>This is the container title</h2>
      <h3>My value is: {myValue}</h3>
      {children}
    </div>
  )
}

export default Container
