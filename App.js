// const heading = React.createElement("h1", { id: "heading" }, "hello world from react !");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// <div id="parent">
//     <div id="child">
//         <h1>i am h1 tag</h1>
//     </div>
// </div>

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "I Am h1 Tag"),
        React.createElement("h2", {}, "I am second h1 Tag"),
        ]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I Am h1 Tag"),
        React.createElement("h2", {}, "I am second h1 Tag"),
        ]),
    ]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);