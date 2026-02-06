import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

/* IMPORT IMAGES */
import wImg from "../../app/assests/images/W4.jpg";
import hImg from "../../app/assests/images/W7.jpg";
import sImg from "../../app/assests/images/W6.jpg";

/* SYSTEM ALERT POPUP */
function SystemAlert({ message }) {
  if (!message) return null;

  return (
    <div className="system-popup">
      <div className="glitch-text">⚠ SYSTEM ALERT</div>
      <p>{message}</p>
    </div>
  );
}

/* RANK CALCULATOR */
const getRank = level => {
  if (level >= 80) return "S";
  if (level >= 60) return "A";
  if (level >= 40) return "B";
  if (level >= 20) return "C";
  if (level >= 10) return "D";
  return "E";
};

export default function Dashboard() {
  const { xp = 0, level = 1 } =
    useSelector(s => s.xp || {});

  const { weightHistory = [], water = 0 } =
    useSelector(s => s.progress || {});

  const latestWeight =
    weightHistory[weightHistory.length - 1]?.value || "--";

  const xpPercent = (xp / (level * 100)) * 100;
  const rank = getRank(level);

  const [alertMsg, setAlertMsg] = useState("");

  /* Example alert */
  useEffect(() => {
    const missedQuest = false;

    if (missedQuest) {
      setAlertMsg("You missed today's quest!");
      setTimeout(() => setAlertMsg(""), 4000);
    }
  }, []);

  return (
    <div className="dashboard">

      {/* SYSTEM ALERT */}
      <SystemAlert message={alertMsg} />

      {/* LEVEL PANEL */}
      <div className="system-card character-panel">
        <h2>⚡ Level {level}</h2>
        <p className="rank">{rank} Rank Hunter</p>

        <div className="xp-bar">
          <div
            className="xp-fill fire-xp"
            style={{ width: `${xpPercent}%` }}
          />
        </div>

        <p>{xp} / {level * 100} XP</p>
      </div>

      {/* STATS CARDS WITH IMAGES */}
      <div className="stats-grid">

        <div className="system-card stat-card">
          <img src={wImg} alt="weight" className="stat-img" />
          <h3>🏋️ Weight</h3>
          <p>{latestWeight} kg</p>
        </div>

        <div className="system-card stat-card">
          <img src={hImg} alt="water" className="stat-img" />
          <h3>💧 Hydration</h3>
          <p>{water} glasses</p>
        </div>

        <div className="system-card stat-card">
          <img src={sImg} alt="streak" className="stat-img" />
          <h3>🔥 Streak</h3>
          <p>0 Days</p>
        </div>

      </div>

      {/* DAILY QUEST PANEL */}
      <div className="system-card quest-panel">
        <h3>🔥 Daily Quest</h3>
        <p>Complete one workout today</p>
        <span className="reward">
          Reward: +50 XP
        </span>
      </div>

    </div>
  );
}
