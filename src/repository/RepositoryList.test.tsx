// External dependencies
import React from "react";
import { cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";

// Local modules
import { render } from "utils/test-utils";
import RepositoryList from "repository/RepositoryList";
import { currentReposMock } from "repository/mocks";

const repositoryListProps = {
  currentRepos: currentReposMock,
  handleChangePage: () => {},
  loading: false,
  error: false,
  hasNoRepositoryCount: false,
};

const repositoryListLoadingProps = {
  currentRepos: [],
  handleChangePage: () => {},
  loading: true,
  error: false,
  hasNoRepositoryCount: false,
};

const repositoryListErrorProps = {
  currentRepos: [],
  handleChangePage: () => {},
  loading: false,
  error: true,
  hasNoRepositoryCount: false,
};

const repositoryListNoResultsProps = {
  currentRepos: [],
  handleChangePage: () => {},
  loading: false,
  error: false,
  hasNoRepositoryCount: true,
};

describe("<RepositoryList />", () => {
  afterEach(cleanup);

  it("renders the list of repos properly", () => {
    const { getByText } = render(
      <RepositoryList {...repositoryListProps} />,
      []
    );

    // The list of repos is in the document
    const listElement = screen.getByTestId("repos-list");
    expect(listElement).toBeInTheDocument();

    // Renders the repository with the name 'facebook/react' as a link to the actual GitHub repo
    const repoNameElement = getByText(/facebook\/react$/i);
    expect(repoNameElement).toHaveAttribute(
      "href",
      "https://github.com/facebook/react"
    );

    // Displays stars count of the repository
    const starsCountElement = getByText(/157557/i);
    expect(starsCountElement).toBeInTheDocument();

    // Displays fork count of the repository
    const forksCountElement = getByText(/31140/i);
    expect(forksCountElement).toBeInTheDocument();
  });

  it("shows spinner when the data is loading", () => {
    const { container } = render(
      <RepositoryList {...repositoryListLoadingProps} />,
      []
    );

    const spinnerElement = container.querySelector(
      "div.ant-spin.ant-spin-spinning"
    );
    expect(spinnerElement).toBeInTheDocument();
  });

  it("shows error message if there is one there", async () => {
    const { getByText } = render(
      <RepositoryList {...repositoryListErrorProps} />,
      []
    );

    const errorMessageElement = getByText(/Something went wrong. Try again\?/i);
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("shows corresponding message if there are no results", () => {
    const { getByText } = render(
      <RepositoryList {...repositoryListNoResultsProps} />,
      []
    );

    const noResultsElement = getByText(/No repositories yet/i);
    expect(noResultsElement).toBeInTheDocument();
  });
});
