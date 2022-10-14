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
    searchString: string;
    setSearchString: Dispatch<SetStateAction<string>>;
    searchReload?: boolean;
    setSearchReload?: Dispatch<SetStateAction<boolean>>;
    fetchingData?: boolean;
    setFetchingData?: Dispatch<SetStateAction<boolean>>;
    noResultsFound?: boolean;
}

export interface ErrorMessagePropTypes {
    errorMessage: string;
    errorSeverity: string;
}
