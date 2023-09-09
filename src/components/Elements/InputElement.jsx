const InputElement = ({ formData }) => {
  const { textStyle, ...styles } = formData || {};
  const defaultStyles = {
    borderStyle: "solid",
  };
  return (
    <input
      type="text"
      style={{ ...styles, ...textStyle, ...defaultStyles }}
      placeholder={formData?.placeholder}
    />
  );
};

export default InputElement;
