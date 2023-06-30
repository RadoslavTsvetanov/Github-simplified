import { Octokit } from "octokit";
export async function getUserInfo(username:string,token:string){
    const octoKit = new Octokit({userAgent:'myApp v1.2.3',baseUrl: 'https://api.github.com',auth:token});
    const user = await octoKit.rest.repos.listForAuthenticatedUser({
        username:username
    });
    return user
  }


export  async function createRepository(repoName:string, description:string,token:string) {
    try {
      // Make a request to create the repository
      const octoKit = new Octokit({userAgent:'myApp v1.2.3',baseUrl: 'https://api.github.com',auth:token});
      const response = await octoKit.repos.createForAuthenticatedUser({
        name: repoName,
        description: description,
      });
  
      // Return the repository details
      return response.data;
    } catch (error) {
      console.error("Error creating repository:", error);
      throw error;
    }
  }


export  async function writeFileToRepository(repoOwner:string, repoName:string, path:string, content, commitMessage:string,token:string) {
    const octoKit = new Octokit({userAgent:'myApp v1.2.3',baseUrl: 'https://api.github.com',auth:token});
    try {
      // Make a request to create a new file in the repository
      const response = await octoKit.repos.createOrUpdateFileContents({
        owner: repoOwner,
        repo: repoName,
        path: path,
        message: commitMessage,
        content: Buffer.from(content).toString("base64"),
      });
  
      // Return the response data
      return response.data;
    } catch (error) {
      console.error("Error writing to repository:", error);
      throw error;
    }
  }
  
  // Usage example
//   const owner = "your-github-username";
//   const repository = "your-repo-name";
//   const filePath = "path/to/file.txt";
//   const fileContent = "Hello, world!";
//   const commitMsg = "Add file.txt";
  
//   writeFileToRepository(owner, repository, filePath, fileContent, commitMsg)
//     .then((response) => {
//       console.log("File written to repository:", response);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });



export async function deleteRepository(owner:string, repo:string,token:string) {
    const octoKit = new Octokit({userAgent:'myApp v1.2.3',baseUrl: 'https://api.github.com',auth:token});
    try {
      // Make a request to delete the repository
      console.log(token, "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");
      
      console.log(owner)
      console.log(repo);
      
      const response = await octoKit.rest.repos.delete({
        owner: owner,
        repo: repo,
      });
  
      // Return the response data
      return response.data;
    } catch (error) {
      console.error("Error deleting repository:", error);
    }
  }

// const owner = "your-github-username";
// const repository = "your-repo-name";

// deleteRepository(owner, repository)
//   .then((response) => {
//     console.log("Repository deleted:", response);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });