import {useState} from 'react'
import './App.css'

import {a, Users} from './Users.js';
import UserComponent from "./components/UserComponent.jsx";


function App() {
    const mUsers = new Users();
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(mUsers.users);

    console.log(users);

    const addCount = () => {
        setCount(count + 1);
    }


    return (
        <>
            <h1>count = {count}</h1>
            <button onClick={addCount}>카운트 증가</button>
            {
                users.map(user => (
                    <UserComponent>
                        <h1>id = {user.id}</h1>
                        <h1>name = {user.name}</h1>
                        <h1>email = {user.email}</h1>
                    </UserComponent>
                ))
            }
        </>
    )
}

export default App
