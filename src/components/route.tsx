import React from 'react';
import { Route, Routes } from 'react-router';

import { MainPage } from '~/pages/MainPage';
import { MostPopularPage } from '~/pages/MostPopularPage';
import { Vegan } from '~/pages/Vegan';

export const AppRoutes: React.FC = () => {
    const navigationRoutes = [
        { path: '/*', element: <MainPage /> },
        { path: '/vegan', element: <Vegan /> },
        { path: '/most-popular', element: <MostPopularPage /> },
    ];
    return (
        <Routes>
            {navigationRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};
