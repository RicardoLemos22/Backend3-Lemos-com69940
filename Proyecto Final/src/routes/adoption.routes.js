import { AdoptionControllers } from "../controllers/adoptions.controller.js";
import { Router } from "express";

const adoptionsController = new AdoptionControllers();
const router = Router();

router.get("/", adoptionsController.getAllAdoptions);
router.get("/:aid", adoptionsController.getAdoption);
router.post("/:uid/:pid", adoptionsController.createAdoption);

export default router;
