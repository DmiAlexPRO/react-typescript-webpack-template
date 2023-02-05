import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";


const App = () => {
   const { theme, toggleTheme } = useTheme();

    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
