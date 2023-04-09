/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from "react-dom/client";
import LessionOne from "./01PropsAndState/LessionOne";
import LessionTwo from "./02RoutingAndNaviagtion/LessonTwo";

// --------------------------------------------------------------------------------------------
/**
 *  @description: index.js file is the first lines of that executes when react code is running on the Browser;
 *    - Selecting an element with id "root" and assigning this element into
 *      constant root variable.
 *    - And then assiging <App /> component as root variable's child.
 */
ReactDOM.createRoot(document.getElementById("root")).render(<LessionTwo />);
// --------------------------------------------------------------------------------------------
