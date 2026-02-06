import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWeight } from "../../app/components/redux/slices/progressSlice";

/* IMPORT YOUR IMAGES */
import w1 from "../../app/assests/images/W5.jpg";
import w2 from "../../app/assests/images/W6.jpg";
import w3 from "../../app/assests/images/w1.jpg";

export default function Progress() {
  const dispatch = useDispatch();

  const { weightHistory = [] } =
    useSelector(s => s.progress || {});

  const { level = 1, xp = 0 } =
    useSelector(s => s.xp || {});

  const { username = "Hunter" } =
    useSelector(s => s.user || {});

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  /* SAVE WEIGHT */
  const save = () => {
    if (!weight) return;
    dispatch(addWeight(weight));
    setWeight("");
  };

  const latest =
    weightHistory[weightHistory.length - 1]?.value || 0;

  /* BMI USING KG + CM */
  const kg = Number(weight) || latest;
  const cm = Number(height);

  const bmi =
    kg && cm
      ? (kg / ((cm / 100) * (cm / 100))).toFixed(1)
      : "--";

  /* BMI CATEGORY + COLOR */
  const getBMICategory = bmi => {
    if (!bmi || bmi === "--")
      return { label: "", color: "#888" };

    if (bmi < 18.5)
      return { label: "Underweight", color: "#3b82f6" };

    if (bmi < 25)
      return { label: "Healthy", color: "#22c55e" };

    if (bmi < 30)
      return { label: "Overweight", color: "#f59e0b" };

    return { label: "Obese", color: "#ef4444" };
  };

  const bmiInfo = getBMICategory(parseFloat(bmi));

  return (
    <div className="progress-page">

      {/* TOP CARDS */}
      <div className="top-cards">

        {/* PROFILE */}
        <div className="system-card profile-panel">
          <h2>{username}</h2>
          <p>Level {level}</p>
          <p>{xp} XP</p>
        </div>

        {/* WEIGHT INPUT */}
        <div className="system-card weight-input">
          <h3>🏋 Weight (KG)</h3>

          <input
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Weight kg"
            className="system-input"
          />

          <button onClick={save} className="system-btn">
            Save Weight
          </button>
        </div>

        {/* HEIGHT + BMI */}
        <div className="system-card weight-input">
          <h3>📏 Height (CM)</h3>

          <input
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="Height cm"
            className="system-input"
          />

          <p style={{ marginTop: 10 }}>
            BMI: <b>{bmi}</b>
          </p>

          <span
            className="bmi-status"
            style={{
              background: `${bmiInfo.color}22`,
              color: bmiInfo.color
            }}
          >
            {bmiInfo.label}
          </span>
        </div>

      </div>

      {/* IMAGE STAT CARDS */}
      <div className="stats-grid">

        <div className="system-card stat-hover">
          <img src={w1} alt="weight" className="stat-img" />
          <h3>Latest Weight</h3>
          <p>{latest || "--"} kg</p>
        </div>

        <div className="system-card stat-hover">
          <img src={w2} alt="progress" className="stat-img" />
          <h3>BMI Score</h3>
          <p>{bmi}</p>
        </div>

        <div className="system-card stat-hover">
          <img src={w3} alt="health" className="stat-img" />
          <h3>Status</h3>
          <p style={{ color: bmiInfo.color }}>
            {bmiInfo.label}
          </p>
        </div>

      </div>

      {/* TOGGLE BUTTON */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button
          className="system-btn"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory
            ? "Hide Progress"
            : "Show Weight Progress"}
        </button>
      </div>

      {/* GRAPH + HISTORY */}
      {showHistory && (
        <div className="bottom-cards">

          <div className="system-card graph-card">
            <h3>Weight Trend</h3>

            <div className="graph">
              {weightHistory.map((w, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{
                    height: `${w.value * 2}px`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="system-card history">
            <h3>History</h3>

            {weightHistory.map((w, i) => (
              <p key={i}>
                {w.value} kg — {w.date}
              </p>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
