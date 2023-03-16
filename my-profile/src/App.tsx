import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from '../src/components/Layout/LandingLayout';
import Main from './main';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Landing/>
            }
        ]
    }
]);

function App() {
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
