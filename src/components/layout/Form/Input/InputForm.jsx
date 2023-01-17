import { Form_control } from "./InputStyled";

function InputForm({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <Form_control>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </Form_control>
  );
}
export default InputForm;
