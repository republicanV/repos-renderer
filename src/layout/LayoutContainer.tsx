// External dependencies
import React, { FC, useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useDebounce } from "use-debounce";

// Local modules
import LayoutWrapper from "layout/LayoutWrapper";
import SearchInput from "search/SearchInput";
import RepositoryList from "repository/RepositoryList";
import { GET_REPOS } from "api/queries";
import { getCurrentRepos } from "repository/utils";
import { DELAY_MSEC, ITEMS_COUNT } from "repository/constants";

const LayoutContainer: FC = () => {
  const [searchTerm, setSearchTerm] = useState("react");

  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setreposPerPage] = useState(10);

  // Delay search query fro DELAY_MSEC
  const [debouncedSearchTerm] = useDebounce(searchTerm, DELAY_MSEC);

  // Query for the repos and get first ITEMS_COUNT
  const { data, loading, error } = useQuery(GET_REPOS, {
    variables: { search_term: debouncedSearchTerm, first: ITEMS_COUNT },
  });

  useEffect(() => {
    setRepos(data?.search?.edges);
  }, [data]);

  /**
   *
   * Called when the page number is changed,
   * and it takes the resulting page number and pageSize as its arguments
   *
   * Sets current page
   * Sets number of repositories per page
   *
   * @param {number} page - Page number
   * @param {number} pageSize - Number of data items per page
   *
   */
  const handleChangePage = (page: number, pageSize: number) => {
    page !== currentPage && setCurrentPage(page);
    pageSize !== reposPerPage && setreposPerPage(pageSize);
  };

  /**
   *
   * Called when the value appears in the search box
   *
   * Sets search term
   *
   * @param {React.ChangeEvent} event - Page number
   *
   */
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event?.currentTarget?.value);

  // Get a portion of the repos array for pagination
  const currentRepos = getCurrentRepos(currentPage, reposPerPage, repos);

  return (
    <LayoutWrapper>
      <SearchInput handleChangeValue={handleChangeValue} value={searchTerm} />
      <RepositoryList
        currentRepos={currentRepos}
        handleChangePage={handleChangePage}
        loading={loading}
        error={error}
        hasRepositoryCount={!data?.search?.repositoryCount}
      />
    </LayoutWrapper>
  );
};

export default LayoutContainer;
