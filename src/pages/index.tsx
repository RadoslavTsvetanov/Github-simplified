import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Octokit } from "octokit";
import {createRepository,writeFileToRepository,getUserInfo,deleteRepository,getStarredRepos} from "~/octokit_actions/basic_functions"
import { useRouter } from 'next/router';
import MAIN from "~/components/main"
import React from "react";
import InputField from"~/components/tokenInput"
import Repo from "~/components/repo"
import HighlightedDiv from "~/components/showSwitcher";
export default function Home() {
  return (
    <div className="bg-purple-950">
      
            <AuthShowcase />
          
    </div>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();
  const [filters,setFilters] = React.useState([])
  const [showRepos,setShowRepos] = React.useState("starred")
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
    if(showRepos === "normal"){
      getUserInfo(sessionData?.user.name || "",token)
    .then((data) => {
      setRepos(data.data.map((repo) => {
        console.log(repo);
                
        return <Repo name={repo.name} description={repo.description || ""} link={repo.html_url} owner = {repo.owner.login} key={repo.id}/>;
      }));
    }).catch(error => {
      console.log(error)
    })
    
  }else{
    getStarredRepos(sessionData?.user.name || "",token)
    .then((data) => {
      console.log(data)
      setRepos(data.data.map((repo) =>{
        return <Repo name={repo.name} description={repo.description || ""} link={repo.html_url} owner = {repo.owner.login} key={repo.id}/>;
      }))
    })
    .catch(error => {
      console.log(error)
    })
  }
},[token])
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
      <InputField value={token} onChange={handleTokenChange}/>
      <MAIN/>
      <HighlightedDiv text={showRepos}/>{/*make it interactive */}
      {/* make a grouping feature - folders with repos */}
      {github_repos}
    </div>
  );
}
