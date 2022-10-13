import { SetStateAction, Dispatch } from 'react';

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

export interface SearchPropTypes {
    setSearchString: Dispatch<SetStateAction<string>>;
    searchString: string;
    setSearchReload: Dispatch<SetStateAction<boolean>>;
    searchReload: boolean
}

export interface ErrorMessagePropTypes {
    errorMessage: string;
    errorSeverity: string;
}
