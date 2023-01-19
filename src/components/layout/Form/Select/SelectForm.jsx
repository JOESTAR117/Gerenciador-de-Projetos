import { Select } from "./SelectFormStyles";

function SelectForm({ text, name, options, handleOnChange, value }) {
  return (
    <Select>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>
    </Select>
  );
}
export default SelectForm;
