const ContainerElement = ({ formData }) => {
  const { textStyle, ...styles } = formData || {};
  const defaultStyles = {
    borderStyle: "solid",
  };
  const compiledStyle = { ...styles, ...textStyle, ...defaultStyles };
  console.log("compiledStyle", compiledStyle);
  return <div style={compiledStyle}>{formData?.sampleText}</div>;
};

export default ContainerElement;
