import { SetStateAction, Dispatch} from "react";

export type HelpData = {
    parameter: string;
    name: string;
    description: string;
    examples: Array<string>;
};

export type SearchResultItem = {
    sentence: string;
    occurrencePercentage: number;
};

export interface SearchPropsType {
    setSearchString: Dispatch<SetStateAction<string>>
    searchString: string
}