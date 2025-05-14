import React from 'react';
import './App.css';
import Login from './components/auth/Login';

function App() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login berhasil dengan:', { email, password });
    // Di sini Anda dapat menambahkan logika autentikasi sebenarnya
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
