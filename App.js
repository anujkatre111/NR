

const parent = React.createElement("div",
    {id: "parent"},
    React.createElement("div",{id: "child"},
        React.createElement("h1",{id: "text"}, "hello bhai"))
)


const heading = React.createElement("h1",
    {id: "heading" , xyz: "abc"},
    "Hello World from react");

const wrap = React.createElement("div",{id: "wrap"},[heading,parent,heading,heading])  

const root1 = ReactDOM.createRoot(document.getElementById("root1"))
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
const root3 = ReactDOM.createRoot(document.getElementById("root3"))


console.log(heading);
root1.render(wrap);
root2.render(wrap);
root3.render(wrap);
