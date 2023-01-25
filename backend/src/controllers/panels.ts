import createHttpError  from "http-errors";
import { RequestHandler } from "express";
import PanelModel from "../models/panel";
import mongoose from "mongoose";

// get all panels
export const getPanels: RequestHandler = async (req, res, next) => {
  // call auth later to verify the user

  // for now just give all users the ability to get the panels api
  try {
    const panels = await PanelModel.find().exec();
    res.status(200).json(panels);
  } catch (error) {
    next(error);
  }
};

// get one specific panel
export const getPanel: RequestHandler = async (req, res, next) => {
  const panelId = req.params.panelId;

  try {
    // add error handling
    if (!mongoose.isValidObjectId(panelId)) {
      throw createHttpError(400, "Invalid Panel Id");
    }

    const panel = await PanelModel.findById(panelId).exec();

    if (!panel) {
      throw createHttpError(404, "Panel not found");
    }

    res.status(200).json(panel);

    // add  error handling
  } catch (error) {
    next(error);
  }
};
