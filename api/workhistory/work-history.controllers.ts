
import { Request, Response } from 'express';
import * as WorkHistoryService from "./work-history.services";
import { WorkHistory } from "./work-history";

export const GetWorkHistories = async (req: Request, res: Response) => {
    const queryId = req.params.id as unknown as number;
    try {
        var response: WorkHistory | WorkHistory[];
        queryId ? 
            response = await WorkHistoryService.find(queryId)
            : response = await WorkHistoryService.findAll()

        res.status(200).send(response);
    }
    catch (e: any) {
        res.status(500).send(e.message);
    }
}
