import React, { useState } from "react";
import { login } from "../../app/components/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PR from "../../app/components/router/routePath";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const submit = e => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.password) {
      setMsg("⚠️ Enter Email & Password");
      return;
    }

    setLoading(true);

    // Fake login delay (replace with API later)
    setTimeout(() => {
      dispatch(login(form));
      navigate(PR.DASHBOARD);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1 className="system-title">SOLO SYSTEM</h1>
        <p className="subtitle">Awaken Your Power</p>

        {msg && (
          <p style={{ color: "#38bdf8" }}>
            {msg}
          </p>
        )}

        <form onSubmit={submit}>
          {/* EMAIL */}
          <input
            placeholder="Hunter Email"
            className="system-input"
            onChange={e =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
          />

          {/* PASSWORD */}
          <div style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Secret Code"
              className="system-input"
              onChange={e =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />

            <span
              onClick={() => setShowPass(!showPass)}
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                cursor: "pointer",
                fontSize: 12
              }}
            >
              {showPass ? "Hide" : "Show"}
            </span>
          </div>

          {/* REMEMBER */}
          <label style={{ fontSize: 12 }}>
            <input type="checkbox" /> Remember me
          </label>

          <button
            className="system-btn"
            disabled={loading}
          >
            {loading
              ? "Loading System..."
              : "ENTER SYSTEM"}
          </button>
        </form>

        <p className="signup-text">
          New hunter?
          <span
            onClick={() => navigate(PR.SIGNUP)}
            style={{ marginLeft: 5 }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
