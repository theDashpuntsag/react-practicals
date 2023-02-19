import React from "react";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

/**
 *
 * @THINGS_YOU_SHOULD_KEEP_IN_MIND
 *
 *    @SPA_SinglePageApplication
 *      - Single page application means that your app runs on a single html DOM.
 *        But it's capable of showing different views to user.
 *      - By using this kind of approach you can enhacne the UX a lot.
 *
 *    @React_Router
 *      - Router is a special tool which actually watches changes in the URL, and then
 *        changes whats's visible on the screen based on the URL.
 *
 *    @CSS_Files
 *      - In the small project 1 CSS file would be enough to contain styles for all components.
 *      - But this approach is not necessary for a bigger project.
 *      - Therefore you typically need to have a diffrent CSS files for each components.
 *
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllMeetupsPage />,
  },
  {
    path: "/new-meetups",
    element: <NewMeetupPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

export default function LessionTwo() {
  return (
    /**
     *
     *
     */
    // <React.StrictMode>
    //   <RouterProvider router={router} />
    // </React.StrictMode>

    /**
     *  Other way to implement Router config
     *
     *    @BrowserRouter
     *      + BrowserRouter is a router implementation that uses the HTML5 history API to keep
     *        your UI in sync with the URL. It is the parent component used to store all other
     *        components.
     *
     *
     */
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index exact element={<AllMeetupsPage />} />
            <Route path="new-meetups" exact element={<NewMeetupPage />} />
            <Route path="favorites" exact element={<FavoritesPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
