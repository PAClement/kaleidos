import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import Game from "./pages/Game";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </Router>
        </React.StrictMode>
    </React.StrictMode>
);
