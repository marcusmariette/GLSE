import React, { useState } from 'react';
import Router from './router/Router';
import LoaderScreen from './components/loader/LoaderScreen';

const App: React.FC = () => {
    const [searchString, setSearchString] = useState<string>('');

    return (
        <>
            <LoaderScreen />
            <Router searchString={searchString} setSearchString={setSearchString} />
        </>
    );
};

export default App;
