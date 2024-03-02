import React from 'react'

const UserDetails = ({id, firstName, age, profession}) => {
  return (
    <div>
      <h4>Hello, my name is {firstName}. I am {age} years old and my job is {profession}</h4>
      {age>18 ? (<h5>I am over eighteen</h5>) : (<h5>I am underaged</h5>)}
    </div>
  )
}

export default UserDetails
