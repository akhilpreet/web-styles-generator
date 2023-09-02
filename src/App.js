import { Image, Tabs } from "antd";
import TextTypeGenerator from "./components/TextTypeGenerator";
import ElementStyleGenerator from "./components/ElementStyleGenerator";
import ColorTypeGenerator from "./components/ColorTypeGenerator";
import Logo from "./assets/Logo.png";

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
    <>
      <Image width={100} src={Logo} className="absolute" />
      <div className="max-w-6xl mx-auto px-12 py-4 mt-4 bg-zinc-100">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </>
  );
}

export default App;
