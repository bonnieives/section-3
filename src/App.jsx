import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from './assets/city.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import MyFragment from './components/MyFragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)
  const [userName] = useState("Eleni");
  
  const cars = [
    {id: 1, brand: "Ford", color: "White", newCar: false, km: 1000},
    {id: 2, brand: "Savage", color: "White/Blue", newCar: true, km: 0},
    {id: 3, brand: "Nissan", color: "Grey", newCar: false, km: 100000},
    {id: 4, brand: "Toyota", color: "Black", newCar: true, km: 0},
  ]

  const people = [
    {id: 1, name: "Bonnie", age: 40, profession: "Programmer"},
    {id: 2, name: "Eleni", age: 33, profession: "Psychologist"},
    {id: 3, name: "Maria Eduarda", age: 20, profession: "Teacher"},
    {id: 4, name: "Maria Clara", age: 19, profession: "Nutricionist"},
    {id: 5, name: "Bianca", age: 2, profession: "Being Cute"},
  ]

  function showMessage() {
    console.log("Event from parent component")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      <h1>Section 3</h1>
      <h3>Image in public</h3>
      <div>
        <img src="/beach.jpg" alt="Beach Winter Landscape"/>
      </div>
      <h3>Image in assets</h3>
      <div>
        <img src={City} alt="City"/>
      </div>
      <h3>Rendering test with action from buttons</h3>
      <ManageData />
      <h3>Rendering a list</h3>
      <ListRender />
      <h3>Rendering using conditionals</h3>
      <ConditionalRender />
      <h3>Rendering using Props</h3>
      <ShowUserName name={userName} />
      <h3>Destructuring props</h3>
      <CarDetails brand="Ford" km={10000} color="White" newCar={false}/>
      <h3>Reusing props</h3>
      <CarDetails brand="Buggy" km={100000} color="White/Blue" newCar={false}/>
      <CarDetails brand="Nissan" km={0} color="Grey" newCar={true}/>
      <h3>Reusing props using loop</h3>
      {cars.map((car) =>
      <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      )}
      <h3>Using Fragments now</h3>
      <MyFragment />
      <Container myValue="Testing">
        <p>This won't be printed</p>
      </Container>
      <h3>Executing the function using props</h3>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      {people.map((person) =>
      <UserDetails firstName={person.name} age={person.age} profession={person.profession}/>
      )}
    </>
  )
}

export default App
