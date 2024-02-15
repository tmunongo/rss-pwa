import './bootstrap';
import '../css/app.css';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

type Props = {}

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {
    return (
        <>
            <StrictMode>
                <RouterProvider router={router} />
            </StrictMode>
        </>
    );
}

export default App;
