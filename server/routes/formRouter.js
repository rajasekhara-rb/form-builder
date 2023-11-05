import express from "express";
import { createAForm, getAllForms, getFormById } from "../controllers/formController.js";

const formRouter = express.Router();

formRouter.get("/all", getAllForms);
formRouter.post("/", createAForm);
formRouter.get("/:id", getFormById);

export default formRouter;