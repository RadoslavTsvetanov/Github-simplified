import React from 'react';
import { api } from "~/utils/api";
interface InputFieldProps {
  username:string
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange,username }) => {
  const {mutate} = api.example.setUserToken.useMutation();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Input value:', value);
    mutate({token:value,username:username})
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter token"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputField;