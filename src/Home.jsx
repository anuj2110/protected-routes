import React, { useEffect } from 'react'
import { getIdToken, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import axios from 'axios'
const Home = () => {
    const callApi = async (token) => {
        const res= await axios.get('http://localhost:8000/',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        console.log(res.data)
    }
    useEffect(()=>{
        onAuthStateChanged(auth,async (user)=>{
            if(user){
                const token = await user.getIdToken()
                callApi(token)
            }
        })
    },[])
  return (
    <div>Home</div>
  )
}

export default Home