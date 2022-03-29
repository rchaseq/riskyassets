import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div>
    
      {/* The outlet tag allows the router to render whatever I'm linking to */}
      <NavigationBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <br/>
      <div className="centered">
      <Outlet />
      </div>
    </div>
  );
}

export default App;
