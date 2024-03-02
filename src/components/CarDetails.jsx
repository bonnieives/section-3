import React from 'react';

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h3>Car details</h3>
        <ul>
            <li>Brand: {brand}</li>
            <li>Km: {km}</li>
            <li>Color: {color}</li>
        </ul>
        {newCar && <p>This car is new</p>}
      
    </div>
  )
}

export default CarDetails
