import React, { Component } from "react";
import Showcase from "./Showcase";

const STORAGE_KEY = "repositoryData";

export class GitHubShowcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  saveData(data) {
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem(STORAGE_KEY, jsonData);
  }

  loadData() {
    const jsonData = sessionStorage.getItem(STORAGE_KEY);

    if ([null, undefined].includes(jsonData)) {
      this.fetchRepositories();
    } else {
      const data = JSON.parse(jsonData);
      this.updateData(data);
    }
  }

  updateData(data) {
    this.setState({ repositories: data });
  }

  fetchRepositories() {
    const { profile } = this.props;

    fetch(`https://api.github.com/users/${profile}/repos`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    })
      .then((res) => res.json())
      .then((data) => this.mapRepositories(data))
      .then((data) => {
        this.updateData(data);
        this.saveData(data);
      })
      .catch(console.log);
  }

  mapRepositories(repositories) {
    return repositories.reverse().map((repository) => ({
      title: repository.name,
      description: repository.description,
      badges: repository.topics,
    }));
  }

  render() {
    const { repositories } = this.state;

    return <Showcase items={repositories} />;
  }
}

export default GitHubShowcase;
