import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const app = initializeApp({
    apiKey: "AIzaSyCbOlgEwG1pn4dYx_Ht2otadL2HNBhl6_w",
  authDomain: "test-fastapi-6ef45.firebaseapp.com",
  projectId: "test-fastapi-6ef45",
  storageBucket: "test-fastapi-6ef45.appspot.com",
  messagingSenderId: "99496020272",
  appId: "1:99496020272:web:53062c4d1c72294d9ae0f5",
  measurementId: "G-R1MHCZJ78W"
})

const auth = getAuth(app)
export {auth}

export default app