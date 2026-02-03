import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss'; // behold eksisterende styling
import App from './App';

const container = document.getElementById('app') || document.body.appendChild(document.createElement('div'));
container.id = 'app';
const root = createRoot(container);
root.render(<App />);
