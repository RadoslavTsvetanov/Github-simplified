import Repo from "./repo";
import React from "react";
import { api } from "~/utils/api";

type RepoType = {
  name: string;
  description: string;
  link: string;
  owner: string;
  id:string
};

interface CollectionProps {
  name: string;
  data: RepoType[];
}

export const Collection: React.FC<CollectionProps> = ({ data, name }) => {
  const [newRepoLink, setNewRepoLink] = React.useState("");
  const [id, setId] = React.useState();
  const [repos, setRepos] = React.useState(() => {
    console.log("sinfgle collection")
    console.log(data);
    console.log("-------")
    if(data.repos !== undefined &&    data.repos.length > 0)
    return data.repos.map((repo) => (
      <Repo
        key={repo.name} // Add a unique key for each repo element
        name={repo.name}
        description={repo.description}
        link={repo.link}
        owner={repo.owner}
      />
    ));
  });

  const { mutate } = api.example.removeUserCollections.useMutation();
  const addRepo = api.example.addRepoToCollection.useMutation();

  const handleAddRepo = () => {
    addRepo.mutate({
      collectionId:data.id,
      link: newRepoLink,
    });
    setNewRepoLink(""); // Clear the input field after adding the repo
  };

  return (
    <>
      <h1>{name}</h1>
      <button
        onClick={() => {
          mutate({
            collectionId: data.id,
          });
          // api.delete
        }}
      >
        delete collection
      </button>
      {repos}
      <div>
        <input
          type="text"
          value={newRepoLink}
          onChange={(e) => setNewRepoLink(e.target.value)}
          placeholder="Enter repo link"
        />
        <button onClick={handleAddRepo}>add repo</button>
      </div>
    </>
  );
};