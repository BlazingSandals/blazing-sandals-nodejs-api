
import express from 'express';
import { defaultRouter as techstacksRouter } from './techstacks';
import { defaultRouter as workhistoryRouter } from './workhistory'
export const routes = express.Router();

routes.use("/api/tech-stacks", techstacksRouter);
routes.use("/api/work-histories", workhistoryRouter);
