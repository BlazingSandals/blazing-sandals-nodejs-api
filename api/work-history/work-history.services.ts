
import { WorkHistory, WorkHistories } from "./work-history";

let workHistories: WorkHistories = {
    1: {
        id: 1,
        company: "Krush",
        years: 2,
        description: "All the Krush",
        image: "https://www.krushoz.com/wp-content/uploads/2021/03/Krush-Logo-By-Riders-for-Riders-Black.png"
    },
    2: {
        id: 2,
        company: "Cincinnati Reds",
        years: 5,
        description: "Go Reds!",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cincinnati_Reds_Logo.svg/294px-Cincinnati_Reds_Logo.svg.png"
    }
};

export const findAll = async (): Promise<WorkHistory[]> => Object.values(workHistories);

export const find = async (id: number): Promise<WorkHistory> => workHistories[id];
