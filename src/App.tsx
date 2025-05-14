import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login berhasil dengan:', { email, password });
    // Di sini Anda dapat menambahkan logika autentikasi sebenarnya
  };

  const handleRegister = (name: string, email: string, password: string) => {
    console.log('Register berhasil dengan:', { name, email, password });
    // Di sini Anda dapat menambahkan logika pendaftaran sebenarnya
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
