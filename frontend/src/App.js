import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './component/Index';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Index />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </>
  );
}

export default App;