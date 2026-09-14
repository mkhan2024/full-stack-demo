const Workout = () => {
  const exercises = [
    "Bench Press",
    "Incline Dumbbell Press",
    "Cable Fly",
    "Tricep Pushdown",
  ];

  return (
    <section className="workout">
      <h2>Workout</h2>

      <h3>Chest & Triceps Workout</h3>

      <p>Exercises included in this workout:</p>

      <ul>
        {exercises.map((exercise) => (
          <li key={exercise}>{exercise}</li>
        ))}
      </ul>
    </section>
  );
};

export default Workout;