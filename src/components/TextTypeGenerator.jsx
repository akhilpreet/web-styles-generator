import { Button, Input, InputNumber, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import WebFont from "webfontloader";
import { fontWeightOptions } from "../Contants";
import { AppContext } from "../context/AppContext";

const { TextArea } = Input;

const TextTypeGenerator = () => {
  const { updateTextTypes } = useContext(AppContext);
  const [sampleText, setSampleText] = useState("");
  const [textTypes, setTextTypes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    fontSize: "16px",
    fontFamily: "",
    lineHeight: 1,
    letterSpacing: 1,
    fontWeight: 400,
  });

  useEffect(() => {
    if ((textTypes.length, updateTextTypes)) {
      updateTextTypes(textTypes);
    }
  }, [textTypes, updateTextTypes]);

  const inputChange = (e, name) => {
    if (!name) {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    setFormData((prev) => ({ ...prev, [name]: e }));
  };

  const addTextType = (e) => {
    e.preventDefault();
    setTextTypes((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
  };

  const removeTextType = (id) => {
    setTextTypes((type) => {
      return type.filter((item) => item.id !== id);
    });
  };

  const loadFont = () => {
    WebFont.load({
      google: {
        families: [
          `${formData.fontFamily}:100,200,300,400,500,600,700,800,900`,
        ],
      },
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
            <label className="text-xs">Sample Text</label>
            <TextArea
              rows={3}
              style={{ resize: "none" }}
              onChange={(e) => {
                setSampleText(e.target.value);
              }}
              name="sampleText"
              placeholder="Sample Text"
            />
          </div>
          <div>
            <label className="text-xs">Name</label>
            <Input onChange={inputChange} name="name" placeholder="Name" />
          </div>
          <div>
            <label className="text-xs">Font Size</label>
            <InputNumber
              className="w-full"
              defaultValue={16}
              onChange={(e) => inputChange(`${e}px`, "fontSize")}
              name="fontSize"
              placeholder="Font Size"
            />
          </div>
          <div>
            <label className="text-xs">Font Family</label>
            <div className="flex flex-row gap-4">
              <Input
                onChange={inputChange}
                name="fontFamily"
                placeholder="Font Family"
              />
              <Button onClick={loadFont} type="default">
                Load Font
              </Button>
            </div>
          </div>
          <div>
            <label className="text-xs">Line Height</label>
            <InputNumber
              className="w-full"
              defaultValue={1}
              step={0.1}
              onChange={(e) => inputChange(e, "lineHeight")}
              name="lineHeight"
              placeholder="Line Height"
            />
          </div>
          <div>
            <label className="text-xs">Letter Spacing</label>
            <InputNumber
              className="w-full"
              defaultValue={1}
              step={0.1}
              onChange={(e) => inputChange(e, "letterSpacing")}
              name="letterSpacing"
              placeholder="Letter Spacing"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs">Font Weight</label>
            <Select
              onChange={(e) => inputChange(e, "fontWeight")}
              name="fontWeight"
              placeholder="Font Weight"
              defaultValue="400"
              options={fontWeightOptions}
            />
          </div>
          <Button type="primary" className="self-end" htmlType="submit">
            Add Text Type
          </Button>
        </form>
        <div className="bg-gray-200 flex-1 p-4">
          <p
            className="break-words max-w-3xl"
            style={{
              fontSize: formData.fontSize,
              fontFamily: formData.fontFamily,
              lineHeight: Number(formData.lineHeight),
              letterSpacing: Number(formData.letterSpacing),
              fontWeight: Number(formData.fontWeight),
            }}
          >
            {sampleText}
          </p>
        </div>
      </section>
      <div>
        <h1>Text Types</h1>
        {textTypes.length ? (
          <div className="flex flex-col gap-12">
            {textTypes.map((type) => {
              return (
                <div key={type.id} className="flex gap-2">
                  <p
                    className="p-0 m-0"
                    style={{
                      fontSize: type.fontSize,
                      fontFamily: type.fontFamily,
                      lineHeight: Number(type.lineHeight),
                      letterSpacing: Number(type.letterSpacing),
                      fontWeight: Number(type.fontWeight),
                    }}
                  >
                    {type.name}
                  </p>
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
          <p className="text-gray-500">No text type added</p>
        )}
      </div>
    </div>
  );
};

export default TextTypeGenerator;
