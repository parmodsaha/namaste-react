import React from "react";
import ReactDOM from "react-dom/client";

const title = (
    <h1 id="heading" className="head" tabIndex="5">
       Namaste react using jsx
    </h1>
);

const HeadingComponent = () => (
    <div className="container">
        {title}
        <h1>This is functional component</h1>;
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);