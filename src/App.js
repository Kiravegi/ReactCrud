import './Components/NavBar';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      
      
      <NavBar />
        <Routes>
        
          <Route   path="/" element={<Home/>} />
          
          <Route   path="/all" element={<AllUsers/>} />

          <Route   path="/add" element={<AddUser/>} />

          <Route   path="/edit/:id" element={<EditUser/>} />
        
        </Routes>
      
    </>
  );
}

export default App;
