import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

interface LoginProps {
  onLogin?: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi dasar
    if (!email || !password) {
      setError('Email dan password diperlukan');
      return;
    }
    
    // Reset error
    setError('');
    
    // Panggil fungsi login jika disediakan
    if (onLogin) {
      onLogin(email, password);
    } else {
      // Simulasi login berhasil
      console.log('Login dengan:', { email, password, rememberMe });
      alert('Login berhasil!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Selamat Datang</h1>
          <p>Masuk ke akun Anda untuk melanjutkan</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="remember-forgot">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Ingat saya</label>
            </div>
            <a href="#" className="forgot-password">Lupa password?</a>
          </div>
          
          <button type="submit" className="btn">
            Masuk
          </button>
        </form>
        
        <div className="form-footer">
          Belum punya akun? <Link to="/register" className="register-link">Daftar sekarang</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 