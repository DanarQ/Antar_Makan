import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h2>Daftar</h2>
      <form>
        <input
          type="nama"
          placeholder="Nama"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Daftar</button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Masuk</Link>
      </p>
    </div>
  );
}
export default Register;
