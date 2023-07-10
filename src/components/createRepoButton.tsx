import {createRepository} from "~/octokit_actions/basic_functions"

import React, { useState } from 'react';
interface Props{
  token:string;
}
const CreateRepoButton: React.FC<Props> = ({token}) => {
  const [name, setName] = useState('');
  const [description,setDescription] = useState('')
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async(event: React.FormEvent) => {
    await createRepository(name,"",token);
    event.preventDefault();
    setIsVisible(!isVisible);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Create new Repo</button>
      {
      isVisible
       && 
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <label>
          Description
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Done</button>
      </form>
      }
    </div>
  );
};

export default CreateRepoButton;
