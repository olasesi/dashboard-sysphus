// src/components/AuthScreen.js
import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";

function Auth() {
  const [email, setEmail] = useState("");
  const [gravatarUrl, setGravatarUrl] = useState("");
  const [repos, setRepos] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const fetchGravatar = (email) => {
    const hash = md5(email.trim().toLowerCase());
    setGravatarUrl(`https://www.gravatar.com/avatar/${hash}`);
  };

  const fetchGitHubRepos = async (email) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${email}+in:email`
      );
      if (response.data.items.length > 0) {
        const username = response.data.items[0].login;
        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(reposResponse.data);
      } else {
        setRepos([]);
      }
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      setRepos([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchGravatar(email);
    await fetchGitHubRepos(email);
  };

  return (
    <div>
      <h1>Auth Screen</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {gravatarUrl && <img src={gravatarUrl} alt="Gravatar" />}
      {repos.length > 0 && (
        <div>
          <h2>GitHub Repositories</h2>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Auth;
