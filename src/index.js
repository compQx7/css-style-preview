import React from 'react';
import { createRoot } from 'react-dom/client';

import Display from './components/Display.jsx';

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Display />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);