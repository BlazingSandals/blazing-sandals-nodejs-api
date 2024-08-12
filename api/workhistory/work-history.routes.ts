
import { Router } from 'express';
import { GetWorkHistories } from "./work-history.controllers" 

export const defaultRouter = Router();

defaultRouter.get("/", GetWorkHistories);
defaultRouter.get("/:id", GetWorkHistories);
