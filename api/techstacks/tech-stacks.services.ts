
import { TechStack, TechStacks } from "./tech-stack";

let techStacks: TechStacks = {
    1: {
        id: 1,
        name: ".net",
        years: 25,
        description: "All the .net",
        image: "https://en.wikipedia.org/wiki/.NET#/media/File:Microsoft_.NET_logo.svg"
    },
    2: {
        id: 2,
        name: "nodejs",
        years: 5,
        description: "All the nodejs too",
        image: "https://en.wikipedia.org/wiki/Node.js#/media/File:Node.js_logo.svg"
    }
};

export const findAll = async (): Promise<TechStack[]> => Object.values(techStacks);

export const find = async (id: number): Promise<TechStack> => techStacks[id];
