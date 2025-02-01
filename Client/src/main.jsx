import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './componenets/NavBar.jsx';
import About from './componenets/About.jsx';
import Resume from './componenets/Resume.jsx';
import Projects from './componenets/Projects.jsx';
import Experience from './componenets/Experience.jsx';
import ContactForm from './componenets/ContactForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          children: [
            { path: "/navbar", element: <NavBar /> },
            { path: "/about", element: <About /> },
            { path: "/resume", element: <Resume /> },
            { path: "/project", element: <Projects /> },
            { path: "/experience", element: <Experience /> },
            { path: "/contact", element: <ContactForm /> },
          ],
        },
      ])}
    />
  </React.StrictMode>
);
