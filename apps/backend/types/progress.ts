// apurba - progress log for one exercise
// not a workout. workout is ravi's part.

export type ProgressLog = {
  id: string;
  userId: string;
  exerciseId: string;
  date: string;
  weight: number;
  reps: number;
  sets: number;
  notes?: string;
};