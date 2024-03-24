import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {routes} from './router.jsx'; // Import your routes

function App() {
  const location = useLocation();
  

  useEffect(() => {
    const currentPath = location.pathname;
    let linkElement = document.getElementById('dynamic-css');

    if (linkElement) {
      document.head.removeChild(linkElement);
    }

    linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.id = 'dynamic-css';

    if (currentPath.startsWith('/dashboard')) {
      linkElement.href = '/public/assets/assets/css/main.css';
    } else {
      linkElement.href = '/public/assets/css/index.css';
    }

    document.head.appendChild(linkElement);

    // Clean up the effect by removing the link element when the component is unmounted
    return () => {
      document.head.removeChild(linkElement);
    };
  }, [location]);


  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.element />} // Use JSX syntax to render elements
        >
          {route.children && (
            <React.Fragment>
              {route.children.map((childRoute, childIndex) => (
                <Route
                  key={childIndex}
                  path={childRoute.path}
                  element={<childRoute.element />} // Use JSX syntax to render elements
                />
              ))}
            </React.Fragment>
          )}
        </Route>
      ))}
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
