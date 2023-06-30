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
  const { data: sessionData } = useSession();
  const [github_repos,setRepos ]= React.useState([])
  const [token,setToken] = React.useState('');
  function handleTokenChange(value:string){
    setToken(value)
  }
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
    
    <div className="flex flex-col items-center justify-center gap-4">
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
        <InputField value={token} onChange={handleTokenChange}/>
      <MAIN/>
      <CreateRepoButton/>
      <h1>Repos:{numOfRepos}</h1>
      {github_repos}
      </>
      }
    </div>
  );
}
