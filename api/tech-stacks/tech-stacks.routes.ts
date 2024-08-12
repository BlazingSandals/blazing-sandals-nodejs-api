
import { Router } from 'express';
import { GetTechStacks } from "./tech-stacks.controllers" 

export const defaultRouter = Router();

defaultRouter.get("/", GetTechStacks);
defaultRouter.get("/:id", GetTechStacks);
