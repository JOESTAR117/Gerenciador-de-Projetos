import { Select } from "./SelectFormStyles";

function SelectForm({text, name,options, handleOnChange, value }) {
    return (
      <Select>
        <label htmlFor={name}>{text}:</label>
       <select name={name} id={name}>
        <option>Selecione uma opção</option>
       </select>
      </Select>
    );
  }
  export default SelectForm;