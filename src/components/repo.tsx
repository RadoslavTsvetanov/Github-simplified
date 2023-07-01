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
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs " data-theme="cupcake">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 block">
        {link}
      </a>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Repo;