// import { useState } from "react";

import { Tabs } from "antd";
import TextTypeGenerator from "./components/TextTypeGenerator";
import ElementStyleGenerator from "./components/ElementStyleGenerator";
import ColorTypeGenerator from "./components/ColorTypeGenerator";

// const creatorOptions = ["Root", "text", "button"];

const items = [
  {
    key: "1",
    label: "Add Text Types",
    children: <TextTypeGenerator />,
  },
  {
    key: "2",
    label: "Add Colors",
    children: <ColorTypeGenerator />,
  },
  {
    key: "3",
    label: "Style Elements",
    children: <ElementStyleGenerator />,
  },
];

function App() {
  return (
    <div className="max-w-6xl mx-auto px-12 py-4 mt-4 bg-zinc-100">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default App;
