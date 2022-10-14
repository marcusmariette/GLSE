import React, { useState } from 'react';
import Router from './router/Router';
import LoaderScreen from './components/loader/LoaderScreen';

const App: React.FC = () => {
    const [searchString, setSearchString] = useState<string>('');
    const [searchReload, setSearchReload] = useState<boolean>(false);
    const [fetchingData, setFetchingData] = useState<Boolean>(false);

    return (
        <>
            <LoaderScreen />
            <Router
                setSearchString={setSearchString}
                searchString={searchString}
                setSearchReload={setSearchReload}
                searchReload={searchReload}
                setFetchingData={setFetchingData}
                fetchingData={fetchingData}
            />
        </>
    );
};

export default App;
