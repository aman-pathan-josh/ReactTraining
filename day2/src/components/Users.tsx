import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { User } from './types.ts';

const Users:React.FC = ()=>{
    const [users,setUsers] = useState<Array<User>>([]);

    const fetchUsers = async ()=>{
        const res = await axios('https://reqres.in/api/users');
        const data = await res?.data?.data;
        setUsers(data);
    }

    useEffect(()=>{
        fetchUsers();
    },[])
    return (
        <div className="container">

        <h1>Users Data</h1>
        <div className='users_div'>
            {users.map((user)=>{
                return (
                    <div className='user_card' key={user?.id}>
                        <img className='user_img' src={user?.avatar}/>
                        <div className='user_details'>
                            <h3>Name: {user?.first_name} {user?.last_name}</h3>
                            <p>Email: {user?.email}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Users;
