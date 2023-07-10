import React from 'react';
import {createRepository,writeFileToRepository,getUserInfo,deleteRepository} from "~/octokit_actions/basic_functions"
interface RepoProps {
  name: string;
  description: string;
  link: string;
  owner:string;
  token:string
}

export const Repo: React.FC<RepoProps> = ({ name, description, link,owner,token }) => {
  const handleUpdate = async () => {
//    await  writeFileToRepository(owner,name,)
  };

  const handleDelete = async() => {
    await deleteRepository(owner,name,token);
  };

  return (
    <div className=" p-4 rounded-lg shadow-md max-w-xs ">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className=" mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 block">
        {link}
      </a>
      <div>
        <button
          className="btn-secondary btn"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className=" btn-primary btn "
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Repo;