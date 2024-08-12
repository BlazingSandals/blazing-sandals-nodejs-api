
import { Request, Response } from 'express';
import * as TechStackService from "./tech-stacks.services";
import { TechStack } from "./tech-stack";

export const GetTechStacks = async (req: Request, res: Response) => {
    const queryId = req.params.id as unknown as number;
    try {
        var response: TechStack | TechStack[];
        queryId ? 
            response = await TechStackService.find(queryId)
            : response = await TechStackService.findAll()

        res.status(200).send(response);
    }
    catch (e: any) {
        res.status(500).send(e.message);
    }
}
