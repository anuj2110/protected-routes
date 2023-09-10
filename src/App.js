import './App.css';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ProtectedRoutes from './ProtectedRoutes';
function App() {
  return (
    <Router>

    <Routes>
    <Route element={<ProtectedRoutes/>}>
    <Route path='/' element={<Home/>}/>
    </Route>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </Router>
  );
}

export default App;
