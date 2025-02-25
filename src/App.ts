import React from 'react';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { LandingPage } from './components/LandingPage';
import { LawFirmDemo } from './components/LawFirmDemo';
import { PrivacyPolicy } from './components/Legal/PrivacyPolicy';
import { TermsConditions } from './components/Legal/TermsConditions';
import type { FC } from 'react';

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      // Home page route
      React.createElement(Route, {
        key: 'home',
        path: "/",
        element: React.createElement(HomePage)
      }),
      // Dynamic landing page route - matches slugs
      React.createElement(Route, {
        key: 'landing',
        path: "/:slug",
        element: React.createElement(LandingPage)
      }),
      // Demo route for law firms
      React.createElement(Route, {
        key: 'demo',
        path: "/demo",
        element: React.createElement(LawFirmDemo, {
          defaultFirmName: "Smith & Associates",
          defaultLocation: {
            city: "Austin",
            state: "TX"
          }
        })
      }),
      // Static routes
      React.createElement(Route, {
        key: 'privacy',
        path: "/privacy",
        element: React.createElement(PrivacyPolicy)
      }),
      React.createElement(Route, {
        key: 'terms',
        path: "/terms",
        element: React.createElement(TermsConditions)
      })
    ]
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

const App: FC = () => {
  return React.createElement(RouterProvider, { router });
};

export default App;