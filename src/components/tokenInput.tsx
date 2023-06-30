import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Input value:', value);
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