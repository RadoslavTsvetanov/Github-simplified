import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Octokit } from "octokit";
import {createRepository,writeFileToRepository,getUserInfo,deleteRepository} from "~/octokit_actions/basic_functions"
import { useRouter } from 'next/router';
import MAIN from "~/components/main"
import React from "react";
import InputField from"~/components/tokenInput"
import Repo from "~/components/repo"
import CreateRepoButton from "~/components/createRepoButton";
export default function Home() {
  return (
    <div className="bg-purple-950">
      
            <AuthShowcase />
          
    </div>
  );
}

function AuthShowcase() {
  const [numOfRepos,setNumOfRepos] = React.useState(0)
  const [user,setUser] = React.useState({});
  const { data: sessionData } = useSession();
  const [github_repos,setRepos ]= React.useState([])
  const [token,setToken] = React.useState('');
  function handleTokenChange(value:string){
    setToken(value)
  }
  const getUser = api.example.getUserData.useQuery(
    {
     username: sessionData?.user.name || ""
    },
 {
   enabled: sessionData?.user !== undefined,
   onSuccess: (data) => {
    console.log(data)
     setUser(data);
     setToken(data?.github_token || "")
   },
 })
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  React.useEffect(() => {
    
    getUserInfo(sessionData?.user.name || "",token).then((data) => {
      setRepos(data.data.map((repo) => {
        console.log(repo);
                setNumOfRepos(numOfRepos + 1);
        return <Repo name={repo.name} description={repo.description || ""} link={""} owner = {repo.owner.login} token = {token} key = {repo.id}/>;
      }));
    }).catch(error => {
      console.log(error)
    })
    
  },[token,sessionData?.user.name])
  return (
    
    <div className="flex items-center justify-center gap-4 flex-col">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      {sessionData && <>
        <InputField value={token} onChange={handleTokenChange} username={sessionData.user.name}/>
      <MAIN/>
      <CreateRepoButton/>
      <h1>Repos:{numOfRepos}</h1>
      <div className="flex items-center justify-center gap-4 flex-wrap "> {github_repos}</div> 
      </>
      }
    </div>
  );
}
