import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Media from './pages/Media/Media';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route
          path='/'
          element={user ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />
        <Route
          path='/media/:id'
          element={user ? <Media /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  );
}

export default App;
