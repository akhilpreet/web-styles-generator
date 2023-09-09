import { Button, Input, InputNumber } from "antd";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ColorDropdownSelector from "../Elements/ColorDropdownSelector";
import TextTypeDropdownSelector from "../Elements/TextTypeDropdownSelector";

const InputForm = ({ updateInputFormData }) => {
  const { colors, textTypes } = useContext(AppContext);

  const [formData, setFormData] = useState({
    backgroundColor: "",
    color: "",
    placeholder: "",
    inputName: "",
    width: "",
    height: "",
    paddingLeft: "",
    paddingRight: "",
    borderTopLeftRadius: "",
    borderTopRightRadius: "",
    borderBottomRightRadius: "",
    borderBottomLeftRadius: "",
    borderTop: "",
    borderRight: "",
    borderBottom: "",
    borderLeft: "",
    borderColor: "",
    textStyle: "",
  });

  const inputChange = (e, name) => {
    if (!name) {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    setFormData((prev) => ({ ...prev, [name]: e }));
  };

  useEffect(() => {
    if (updateInputFormData && formData) {
      updateInputFormData(formData);
    }
  }, [updateInputFormData, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", formData);
  };

  return (
    <form className="flex flex-col gap-2 w-80" onSubmit={handleSubmit}>
      <div>
        <label className="text-xs">Input Name</label>
        <Input
          onChange={inputChange}
          name="inputName"
          placeholder="Input Name"
        />
      </div>
      <div>
        <label className="text-xs">Placeholder</label>
        <Input
          onChange={inputChange}
          name="placeholder"
          placeholder="Placeholder"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs">Width</label>
        <InputNumber
          className="w-full"
          defaultValue={1}
          onChange={(e) => inputChange(e, "width")}
          name="width"
          placeholder="Width"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs">Height</label>
        <InputNumber
          className="w-full"
          defaultValue={1}
          onChange={(e) => inputChange(e, "height")}
          name="height"
          placeholder="Height"
        />
      </div>

      <ColorDropdownSelector
        colors={colors}
        label="Background Color"
        fieldName="backgroundColor"
        inputChange={inputChange}
      />

      <ColorDropdownSelector
        colors={colors}
        label="Color"
        fieldName="color"
        inputChange={inputChange}
      />

      <ColorDropdownSelector
        colors={colors}
        label="Border Color"
        fieldName="borderColor"
        inputChange={inputChange}
      />

      <div>
        <label className="text-xs font-bold">Padding</label>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col flex-1">
            <label className="text-xs">Right</label>
            <InputNumber
              className="w-full"
              defaultValue={1}
              onChange={(e) => inputChange(e, "paddingRight")}
              name="paddingRight"
              placeholder="Right"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-xs">Left</label>
            <InputNumber
              className="w-full"
              defaultValue={1}
              onChange={(e) => inputChange(e, "paddingLeft")}
              name="paddingLeft"
              placeholder="Left"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="text-xs">Border Radius</label>
        <div className="flex flex-row gap-2">
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderTopLeftRadius")}
            name="borderTopLeftRadius"
            placeholder="Top Left"
          />
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderTopRightRadius")}
            name="borderTopRightRadius"
            placeholder="Top Right"
          />
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderBottomRightRadius")}
            name="borderBottomRightRadius"
            placeholder="Bottom Right"
          />
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderBottomLeftRadius")}
            name="borderBottomLeftRadius"
            placeholder="Bottom Left"
          />
        </div>
      </div>

      <div>
        <label className="text-xs">Border</label>
        <div className="flex flex-row gap-2">
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderTopWidth")}
            name="borderTopWidth"
            placeholder="Top"
          />
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderRightWidth")}
            name="borderRightWidth"
            placeholder="Right"
          />
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderBottomWidth")}
            name="borderBottomWidth"
            placeholder="Bottom"
          />
          <InputNumber
            defaultValue={1}
            onChange={(e) => inputChange(e, "borderLeftWidth")}
            name="borderLeftWidth"
            placeholder="Left"
          />
        </div>
      </div>

      <TextTypeDropdownSelector
        textTypes={textTypes}
        label="Text Style"
        fieldName="textStyle"
        inputChange={inputChange}
      />

      <Button type="primary" className="self-end" htmlType="submit">
        Add Button
      </Button>
    </form>
  );
};

export default InputForm;
