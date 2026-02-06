import React, { useState } from "react";
import { signup } from "../../app/components/redux/slices/authSlice";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    weight: "",
    height: ""
  });

  const submit = e => {
    e.preventDefault();
    dispatch(signup(form));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create Hunter Account</h2>

        <form onSubmit={submit}>
          {Object.keys(form).map(key => (
            <input
              key={key}
              placeholder={key}
              className="system-input"
              onChange={e =>
                setForm({
                  ...form,
                  [key]: e.target.value
                })
              }
            />
          ))}

          <button className="system-btn">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}
