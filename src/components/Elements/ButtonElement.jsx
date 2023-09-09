const ButtonElement = ({ formData }) => {
  const { textStyle, ...styles } = formData || {};
  const defaultStyles = {
    borderStyle: "solid",
  };
  return (
    <button style={{ ...styles, ...textStyle, ...defaultStyles }}>
      {formData?.btnText}
    </button>
  );
};

export default ButtonElement;
