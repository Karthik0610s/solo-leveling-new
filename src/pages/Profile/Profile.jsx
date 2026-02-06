import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../app/components/redux/slices/userSlice";

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector(s => s.user || {});
  const { xp = 0, level = 1 } =
    useSelector(s => s.xp || {});

  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    username: user.username || "",
    hunterName: user.hunterName || "",
    email: user.email || "",
    password: "",
    dob: user.dob || ""
  });

  /* AGE CALCULATE */
  const getAge = dob => {
    if (!dob) return "--";
    const diff =
      Date.now() - new Date(dob).getTime();
    return Math.floor(
      diff / (1000 * 60 * 60 * 24 * 365)
    );
  };

  const age = getAge(form.dob);

  /* RANK SYSTEM */
  const getRank = lvl => {
    if (lvl >= 80) return "S Rank";
    if (lvl >= 60) return "A Rank";
    if (lvl >= 40) return "B Rank";
    if (lvl >= 20) return "C Rank";
    if (lvl >= 10) return "D Rank";
    return "E Rank";
  };

  const save = () => {
    dispatch(updateUser(form));
    setEdit(false);
  };

  return (
    <div className="progress-page">

      {/* PROFILE HEADER */}
      <div className="system-card profile-panel">

        <h2>
          {form.hunterName || "Hunter"}
        </h2>

        <p>{getRank(level)}</p>
        <p>Level {level}</p>
        <p>{xp} XP</p>

        <button
          className="system-btn"
          onClick={() => setEdit(!edit)}
        >
          {edit ? "Cancel" : "Edit Profile"}
        </button>

      </div>

      {/* PROFILE FORM */}
      <div className="system-card">

        <h3>Profile Details</h3>

        <div className="stats-grid">

          <input
            disabled={!edit}
            placeholder="Username"
            value={form.username}
            onChange={e =>
              setForm({
                ...form,
                username: e.target.value
              })
            }
            className="system-input"
          />

          <input
            disabled={!edit}
            placeholder="Hunter Name"
            value={form.hunterName}
            onChange={e =>
              setForm({
                ...form,
                hunterName: e.target.value
              })
            }
            className="system-input"
          />

          <input
            disabled={!edit}
            placeholder="Email"
            value={form.email}
            onChange={e =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
            className="system-input"
          />

          <input
            disabled={!edit}
            type="password"
            placeholder="New Password"
            value={form.password}
            onChange={e =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
            className="system-input"
          />

          <input
            disabled={!edit}
            type="date"
            value={form.dob}
            onChange={e =>
              setForm({
                ...form,
                dob: e.target.value
              })
            }
            className="system-input"
          />

          <div className="system-card">
            <h4>Age</h4>
            <p>{age}</p>
          </div>

        </div>

        {edit && (
          <button
            onClick={save}
            className="system-btn"
            style={{ marginTop: 20 }}
          >
            Save Changes
          </button>
        )}

      </div>

    </div>
  );
}
