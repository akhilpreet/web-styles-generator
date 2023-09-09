import { ColorPicker, Select } from "antd";
import { useEffect, useState } from "react";

const ColorDropdownSelector = ({
  colors,
  label = "",
  inputChange = () => {},
  fieldName = "",
}) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    if (colors.length) {
      const options = colors.map((item) => {
        return {
          label: (
            <div className="flex flex-row items-center gap-4">
              <div
                className="w-4 h-4 rounded-full"
                style={{ background: item.color }}
              ></div>
              {item.name}
            </div>
          ),
          value: item.color,
        };
      });
      const updatedOptions = [{ label: "none", value: "unset" }, ...options];
      setDropdownOptions(updatedOptions);
    }
  }, [colors]);

  const handleOnChange = (color) => {
    console.log("cilor", color);
    inputChange(color, fieldName);
  };

  return (
    <div className="flex flex-col">
      <label className="text-xs">{label}</label>
      <div className="flex flex-row gap-2 items-center">
        <Select
          className="flex-1"
          onChange={handleOnChange}
          name={fieldName}
          placeholder={label}
          options={dropdownOptions}
        />
        <span className="uppercase text-xs ">or</span>
        <ColorPicker
          onChange={(e) => handleOnChange(`#${e.toHex()}`)}
          size="middle"
          showText
          defaultValue="#ccc"
        />
      </div>
    </div>
  );
};

export default ColorDropdownSelector;
