import { useSelector } from "react-redux";

export default function Achievements() {
  const { xp = 0, level = 1 } =
    useSelector(s => s.xp || {});

  const { weightHistory = [] } =
    useSelector(s => s.progress || {});

  const workouts =
    useSelector(s => s.workout?.history || []);

  /* SIMPLE ACHIEVEMENT RULES */
  const achievements = [
    {
      title: "First Workout",
      desc: "Complete 1 workout",
      unlocked: workouts.length >= 1,
      progress: workouts.length,
      goal: 1
    },
    {
      title: "XP Hunter",
      desc: "Reach 500 XP",
      unlocked: xp >= 500,
      progress: xp,
      goal: 500
    },
    {
      title: "Weight Tracker",
      desc: "Log weight 7 days",
      unlocked: weightHistory.length >= 7,
      progress: weightHistory.length,
      goal: 7
    },
    {
      title: "Elite Hunter",
      desc: "Reach Level 10",
      unlocked: level >= 10,
      progress: level,
      goal: 10
    }
  ];

  return (
    <div className="progress-page">

      <h2 className="system-title">
      </h2>

      <div className="stats-grid">

        {achievements.map((a, i) => (
          <div
            key={i}
            className={`system-card ${
              a.unlocked ? "achieved" : "locked"
            }`}
          >
            <h3>{a.title}</h3>
            <p>{a.desc}</p>

            <progress
              value={a.progress}
              max={a.goal}
              style={{ width: "100%" }}
            />

            <p>
              {a.progress} / {a.goal}
            </p>

            <strong>
              {a.unlocked
                ? "Unlocked"
                : "Locked"}
            </strong>
          </div>
        ))}

      </div>
    </div>
  );
}
