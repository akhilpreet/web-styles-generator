import { Button, ColorPicker, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const ColorTypeGenerator = () => {
  const { updateColors } = useContext(AppContext);
  const [colors, setColors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    color: "#ccc",
  });

  useEffect(() => {
    if (colors.length) {
      updateColors(colors);
    }
  }, [colors, updateColors]);

  const inputChange = (e, name) => {
    if (!name) {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    setFormData((prev) => ({ ...prev, [name]: e }));
  };

  const addTextType = (e) => {
    e.preventDefault();
    setColors((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
  };

  const removeTextType = (id) => {
    setColors((type) => {
      return type.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-row gap-4">
        <form
          className="bg-gray-200 p-4 flex flex-col gap-2 w-80"
          onSubmit={addTextType}
        >
          <div>
            <label className="text-xs">Name</label>
            <Input onChange={inputChange} name="name" placeholder="Name" />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-xs">Color</label>
            <ColorPicker
              onChange={(e) => inputChange(`#${e.toHex()}`, "color")}
              name="color"
              size="large"
              showText
              defaultValue="#ccc"
            />
          </div>
          <Button type="primary" className="self-end" htmlType="submit">
            Add Color
          </Button>
        </form>
        <div
          className="flex-1 p-4 relative"
          style={{ background: formData.color }}
        >
          <span className="bg-gray-200 px-2 py-1 rounded-lg absolute top-1 left-1">
            {formData.color}
          </span>
        </div>
      </section>
      <div>
        <h1>Colors</h1>
        {colors.length ? (
          <div className="flex flex-row flex-wrap gap-12">
            {colors.map((type) => {
              return (
                <div key={type.id} className="flex gap-8">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-20 h-20 rounded-full"
                      style={{ background: type.color }}
                    ></div>
                    <span className="text-xs uppercase tracking-widest font-bold">
                      {type.name}
                    </span>
                  </div>

                  <Button
                    type="primary"
                    danger
                    onClick={() => removeTextType(type.id)}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500">No color added</p>
        )}
      </div>
    </div>
  );
};

export default ColorTypeGenerator;
