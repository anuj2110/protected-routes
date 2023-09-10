import React, { useState } from 'react'
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const onSubmit = async () => {
        try{
            const res = await signInWithEmailAndPassword(auth,email,password)
            localStorage.setItem('user',JSON.stringify(res.user))
            navigate('/')
        }catch(err){
            console.log(err.code)
        }
    }
  return (
    <div>
        <p>Email:</p>
        <input type="email" name="email" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        <p>Password:</p>
        <input type="password" name="password" id="" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br />
        <p></p>
        <button type="submit" onClick={onSubmit}>Login</button>
    </div>
  )
}

export default Login