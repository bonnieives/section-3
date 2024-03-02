import React, { useState } from 'react'

function ListRender() {
    const [list] = useState(["Bonnie","Eleni","Maria Eduarda","Maria Clara","Bianca"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Bonnie", age: 40},
        {id: 2, name: "Eleni", age: 33},
        {id: 3, name: "Maria Eduarda", age: 20},
        {id: 4, name: "Maria Clara", age: 19},
        {id: 5, name: "Bianca", age: 2},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * (users.length + 1));

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id);
            console.log(randomNumber);

        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ol>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ol>
        <button onClick={deleteRandom}>Delete random user</button>
                
    </div>
  )
}

export default ListRender
