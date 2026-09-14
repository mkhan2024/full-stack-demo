// apurba
// controller = take the request, call the service, send something back
// not hooked to a real route yet

import { Request, Response } from "express";
import {
  getLogsForExercise,
  createLog,
  deleteLog,
} from "./progress.service";

export async function listLogs(req: Request, res: Response) {
  const exerciseId = String(req.params.exerciseId || "");
  const logs = await getLogsForExercise(exerciseId);
  res.json(logs);
}

export async function addLog(req: Request, res: Response) {
  const body = req.body;
  const log = await createLog({
    userId: body.userId,
    exerciseId: body.exerciseId,
    date: body.date,
    weight: Number(body.weight),
    reps: Number(body.reps),
    sets: Number(body.sets),
    notes: body.notes,
  });
  res.status(201).json(log);
}

export async function removeLog(req: Request, res: Response) {
  const id = String(req.params.id || "");
  await deleteLog(id);
  res.status(204).send();
}