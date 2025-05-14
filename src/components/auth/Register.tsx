import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

interface RegisterProps {
  onRegister?: (name: string, email: string, password: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi dasar
    if (!name || !email || !password || !confirmPassword) {
      setError('Semua field harus diisi');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Password tidak cocok');
      return;
    }
    
    if (!agreeTerms) {
      setError('Anda harus menyetujui syarat dan ketentuan');
      return;
    }
    
    // Reset error
    setError('');
    
    // Panggil fungsi register jika disediakan
    if (onRegister) {
      onRegister(name, email, password);
    } else {
      // Simulasi register berhasil
      console.log('Register dengan:', { name, email, password });
      alert('Pendaftaran berhasil!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Buat Akun Baru</h1>
          <p>Daftar untuk mengakses semua fitur</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Masukkan nama lengkap Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
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
              placeholder="Buat password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Konfirmasi Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Masukkan password Anda kembali"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          <div className="terms-container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                Saya menyetujui <a href="#" className="terms-link">Syarat dan Ketentuan</a>
              </label>
            </div>
          </div>
          
          <button type="submit" className="btn">
            Daftar Sekarang
          </button>
        </form>
        
        <div className="form-footer">
          Sudah punya akun? <Link to="/login" className="login-link">Masuk di sini</Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 