import { Select } from "antd";
import { useEffect, useState } from "react";

const TextTypeDropdownSelector = ({
  textTypes,
  label = "",
  inputChange = () => {},
  fieldName = "",
}) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  useEffect(() => {
    if (textTypes.length) {
      const options = textTypes.map((item) => {
        return { label: item.name, value: item.id };
      });
      const updatedOptions = [{ label: "none", value: "" }, ...options];
      setDropdownOptions(updatedOptions);
    }
  }, [textTypes]);

  const handleOnChange = (id) => {
    if (!id) {
      inputChange({}, fieldName);
      return;
    }
    const selectedItem = textTypes.filter((item) => item.id === id)[0];
    inputChange(selectedItem, fieldName);
  };

  return (
    <div className="flex flex-col">
      <label className="text-xs">{label}</label>
      <Select
        onChange={handleOnChange}
        name={fieldName}
        placeholder={label}
        options={dropdownOptions}
      />
    </div>
  );
};

export default TextTypeDropdownSelector;
