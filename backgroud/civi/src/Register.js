import React, { useState } from "react";
import "./Auth.css";

const Register = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập đăng ký thành công
    setMessage("Đăng ký thành công! Hãy đăng nhập.");
  };

  return (
    <div className="container">
      <h2>Đăng ký</h2>
      {message && <div className="alert success">{message}</div>}
      <form onSubmit={handleSubmit}>
        <label>Tên người dùng</label>
        <input type="text" placeholder="Nhập tên người dùng" required />

        <label>Email</label>
        <input type="email" placeholder="Nhập email" required />

        <label>Mật khẩu</label>
        <input type="password" placeholder="Nhập mật khẩu" required />

        <button type="submit">Đăng ký</button>
      </form>
      <p>
        Đã có tài khoản? <a href="/login">Đăng nhập</a>
      </p>
    </div>
  );
};

export default Register;
