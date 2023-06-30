import {createRepository} from "~/octokit_actions/basic_functions"

import React, { useState } from 'react';

const CreateRepoButton: React.FC = () => {
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsVisible(!isVisible);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsVisible(!isVisible);
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
        <button type="submit">Done</button>
      </form>
      }
    </div>
  );
};

export default CreateRepoButton;
