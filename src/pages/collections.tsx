import { useSession } from "next-auth/react";
import React from "react";
import { api } from "~/utils/api";
import { Collection } from "~/components/Collection";
import { randomInt } from "crypto";

export default function Collections() {
  const [collections, setCollections] = React.useState([]);
  const { data: sessionData } = useSession();
  const { mutate } = api.example.createCollection.useMutation({
    onSuccess: (response) => {
      console.log(response);
    },
  });

  const [showForm, setShowForm] = React.useState(false); // State to show/hide the form
  const [collectionName, setCollectionName] = React.useState(""); // State to store the input value

  let { data } = api.example.getUserCollections.useQuery(
    {
      userId: sessionData?.user.id,
    },
    {
      enabled: sessionData?.user !== undefined,
    }
  );

  React.useEffect(() => {
    console.log("collections")
    console.log(data);
    if (data !== undefined && data.length > 0) {
      setCollections(
        data.map((collection) => {
          return <Collection name = {collection.name} data = {collection}/>;
        })
      );
    }
  }, [data]);

  const handleAddCollection = () => {
    mutate({
        name:collectionName,
      userId: sessionData?.user.id || "",
    });
    setCollectionName(""); // Clear the input field after adding the collection
    setShowForm(false); // Hide the form after adding the collection
  };

  return (
    <div>
      {showForm ? (
        <div>
          <input
            type="text"
            value={collectionName}
            onChange={(e) => setCollectionName(e.target.value)}
            placeholder="Enter collection name"
          />
          <button onClick={handleAddCollection}>Create collection</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Add new collection</button>
      )}
      {collections}
    </div>
  );
}