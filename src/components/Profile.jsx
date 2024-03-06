
import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext);

    if(!user)
    {
        return <div>PLEASE LOGIN FIRST</div>
    }
    else{
        return <div>WELCOME USER {user.username}</div>
    }
}

export default Profile