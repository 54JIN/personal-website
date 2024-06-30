import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//NPM Dev dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Imported Component Pages
import App from './App';
import Pallets from './Pages/Projects/Pallets/Pallets';
import Afr from './Pages/Projects/Afr/Afr';
import TaskManager from './Pages/Projects/TaskManager/TaskManager';

const router = createBrowserRouter([
  //Page Objects
  {
    path: '/personal-website',
    element: <App />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/projects/pallets',
    element: <Pallets />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/projects/afr',
    element: <Afr />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: '/projects/task-manager',
    element: <TaskManager />,
    errorElement: <div>404 Not Found</div>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
