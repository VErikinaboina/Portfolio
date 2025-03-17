import { Tag } from "./tags";

export interface Card {
    id: number;
    name: string;
    description: string;
    summary: string;
    duration: string,
    // projectLink: string;
    pictures: string[];
    tags: Tag[];
}