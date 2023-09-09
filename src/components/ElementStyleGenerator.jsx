import { Select } from "antd";
import { useState } from "react";
import { elementTypeOptions } from "../Contants";
import InputForm from "./Forms/InputForm";
import ContainerForm from "./Forms/ContainerForm";
import ButtonElement from "./Elements/ButtonElement";
import InputElement from "./Elements/InputElement";
import ContainerElement from "./Elements/ContainerElement";
import ButtonForm from "./Forms/ButtonForm";

const ElementStyleGenerator = () => {
  const [elementType, setElementType] = useState("");
  const [btnFormData, setBtnFormData] = useState(null);
  const [inputFormData, setInputFormData] = useState(null);
  const [containerFormData, setContainerFormData] = useState(null);
  const updateBtnFormData = (formdata) => {
    setBtnFormData(formdata);
  };

  const updateInputFormData = (formdata) => {
    setInputFormData(formdata);
  };

  const updateContainerFormData = (formdata) => {
    setContainerFormData(formdata);
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-row gap-4">
        <div className="bg-gray-200 p-4 flex flex-col w-80">
          <div className="flex flex-col">
            <label className="text-xs">Element Type</label>
            <Select
              onChange={setElementType}
              name="elementType"
              placeholder="Element Type"
              options={elementTypeOptions}
            />
          </div>
          {elementType && (
            <>
              <h2 className="text-gray-500 capitalize p-0 m-0 mt-6">
                {elementType} form
              </h2>
              {elementType === "button" ? (
                <ButtonForm updateBtnFormData={updateBtnFormData} />
              ) : elementType === "input" ? (
                <InputForm updateInputFormData={updateInputFormData} />
              ) : (
                <ContainerForm
                  updateContainerFormData={updateContainerFormData}
                />
              )}
            </>
          )}
        </div>

        <div className="bg-white flex-1 flex items-center justify-center">
          {elementType && (
            <>
              {elementType === "button" ? (
                <ButtonElement formData={btnFormData} />
              ) : elementType === "input" ? (
                <InputElement formData={inputFormData} />
              ) : (
                <ContainerElement formData={containerFormData} />
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ElementStyleGenerator;
