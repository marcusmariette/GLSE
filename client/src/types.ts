import { SetStateAction } from "react";

export type HelpData = {
    parameter: string;
    name: string;
    description: string;
    examples: Array<string>;
};