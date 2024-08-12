
import express from 'express';
import { defaultRouter as techstacksRouter } from './tech-stacks';
import { defaultRouter as workhistoryRouter } from './work-history'
export const routes = express.Router();

//TODO: add search endpoint
routes.use("/api/tech-stacks", techstacksRouter);
routes.use("/api/work-histories", workhistoryRouter);
