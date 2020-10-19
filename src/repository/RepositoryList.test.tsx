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
});
