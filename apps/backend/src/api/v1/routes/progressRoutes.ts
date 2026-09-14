import express, { Router } from "express";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";
import {
  listLogs,
  addLog,
  removeLog,
} from "../../../progress/progress.controller";

const router: Router = express.Router();

// apurba
// same idea as termRoutes
// get logs for one exercise, add a log, delete a log
// validation later

router.get(
  "/exercises/:exerciseId/logs",
  findOrCreateUser,
  listLogs
);

router.post(
  "/logs",
  requireAuth(),
  findOrCreateUser,
  addLog
);

router.delete(
  "/logs/:id",
  requireAuth(),
  findOrCreateUser,
  removeLog
);

export default router;