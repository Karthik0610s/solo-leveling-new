import { useDispatch } from "react-redux";
import { gainXP } from "../../app/components/redux/slices/xpSlice";
import { addWorkout } from "../../app/components/redux/slices/workoutSlice";

import w1 from "../../app/assests/images/w1.jpg";
import w2 from "../../app/assests/images/w2.jpg";
import w3 from "../../app/assests/images/w3.jpg";

export default function Workout() {
  const dispatch = useDispatch();

  const workouts = [
    {
      name: "Pushups",
      reps: 50,
      xp: 50,
      desc: "Upper body strength training",
      img: w1
    },
    {
      name: "Squats",
      reps: 40,
      xp: 40,
      desc: "Leg strength & endurance",
      img: w2
    },
    {
      name: "Running",
      reps: "1 KM",
      xp: 60,
      desc: "Cardio stamina boost",
      img: w3
    }
  ];

  const completeWorkout = w => {
    dispatch(addWorkout(w));
    dispatch(gainXP(w.xp));
  };

  return (
    <div className="workout-page">

      <h2 className="system-title">
        ⚔ Daily Training System
      </h2>

      <div className="workout-grid">
        {workouts.map((w, i) => (
          <div key={i} className="system-card quest-card">

            {/* IMAGE */}
            <img
              src={w.img}
              alt={w.name}
              className="workout-img"
            />

            <h3>🔥 {w.name}</h3>
            <p>{w.desc}</p>
            <p>Target: {w.reps}</p>

            <span className="reward">
              Reward: +{w.xp} XP
            </span>

            <button
              className="system-btn"
              onClick={() => completeWorkout(w)}
            >
              Complete Quest
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}
