import { Router } from "express";
import adoptionsRouter from "./adoption.routes.js";
import mocksRouter from "./mock.routes.js";
import petsRouter from "./pets.routes.js";
import sessionsRouter from "./sessions.routes.js";
import usersRouter from "./users.routes.js";

const router = Router();

router.use("/adoptions", adoptionsRouter);
router.use("/mocks", mocksRouter);
router.use("/pets", petsRouter);
router.use("/sessions", sessionsRouter);
router.use("/users", usersRouter);

export default router;
