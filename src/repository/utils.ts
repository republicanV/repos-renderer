import {Node} from 'repository/interfaces';

/**
 *
 * Used for getting portion of the repos array for pagination
 * 
 * @param {number} currentPage - Current page number
 * @param {number} reposPerPage - Number of repos per page
 * @param {Array} repos - Array with the repos
 * 
 */
export const getCurrentRepos = (currentPage: number, reposPerPage: number, repos: Node[]) => {
    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    return repos?.slice(indexOfFirstRepo, indexOfLastRepo);
};
