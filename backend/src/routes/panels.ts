import * as PanelController from "./../controllers/panels";
import express from "express";

const router = express.Router();

// get all panels
router.get("/", PanelController.getPanels);

// get one note
router.get("/:panelId", PanelController.getPanel)

export default router;