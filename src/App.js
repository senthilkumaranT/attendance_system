import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes,Route, useLocation } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import Login from './components/Login';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Attendance from "./components/Attendance";

function App() {
  const [enableSidebar, setEnableSidebar] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === "/login" || location.pathname === "/signup"){
      setEnableSidebar(false)
    }
    else{
      setEnableSidebar(true)
    }
  }, [location.pathname]);

  return (
    <div className="App">
        { enableSidebar &&  <Box sx={{ display: 'flex' }}>
          <CssBaseline /> 
          <Sidebar />
        </Box> }
        <Routes>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/signup" element={ <Signup /> }/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
    </div>
  );
}

export default function Root(){
  return (
    <Router>
      <App />
    </Router>
  )
}
