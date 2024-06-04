import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = (<h1 id="heading">Namaste react from jsx</h1>);

const HeadingComponent = () => {
    return <h1>this is functional component</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);