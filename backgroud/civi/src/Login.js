// import React from "react";
// import "./Auth.css";

// const Login = () => {
//   return (
//     <div className="container">
//       <h2>Đăng nhập</h2>
//       <form>
//         <label>Email</label>
//         <input type="email" placeholder="Nhập email" required />

//         <label>Mật khẩu</label>
//         <input type="password" placeholder="Nhập mật khẩu" required />

//         <button type="submit">Đăng nhập</button>
//       </form>
//       <p>
//         Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
//       </p>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import "./Auth.css";

const Login = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả lập đăng nhập thành công
    setMessage("Đăng nhập thành công!");
  };

  return (
    <div className="container">
      <h2>Đăng nhập</h2>
      {message && <div className="alert success">{message}</div>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" placeholder="Nhập email" required />

        <label>Mật khẩu</label>
        <input type="password" placeholder="Nhập mật khẩu" required />

        <button type="submit">Đăng nhập</button>
      </form>
      <p>
        Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
      </p>
    </div>
  );
};

export default Login;
