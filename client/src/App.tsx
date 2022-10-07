import React, { useState } from 'react';
import Router from './router/Router';
import LoaderScreen from './components/loader/LoaderScreen';
import db from './utils/firebase';

const App: React.FC = () => {
    const [firebaseDatabase, setFirebaseDatabase] = useState(db);

    return (
        <>
            <LoaderScreen />
            <Router firebaseDatabase={firebaseDatabase} />
        </>
    );
};

export default App;
