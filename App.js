import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", {
        id: "title",
    },
    "Heading 1"
);

// Render the heading element to the DOM
ReactDOM.render(heading, document.getElementById("root"));
