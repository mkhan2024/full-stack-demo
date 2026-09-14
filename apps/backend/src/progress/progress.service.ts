// apurba
// service = talks to the database later
// fake return values for now

import type { ProgressLog } from "../../types/progress";

export async function getLogsForExercise(
  exerciseId: string
): Promise<ProgressLog[]> {
  console.log("get logs for", exerciseId);
  return [];
}

export async function createLog(
  log: Omit<ProgressLog, "id">
): Promise<ProgressLog> {
  console.log("create log", log);
  return {
    id: "temp",
    ...log,
  };
}

export async function deleteLog(id: string): Promise<void> {
  console.log("delete log", id);
}