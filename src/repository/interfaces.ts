export interface Node {
    node: {
        forkCount: number;
        name: string;
        url: string;
        owner: {
            login: string;
        },
        stargazers: {
            totalCount: number;
        }
    };
};

export interface IRepositoryListProps {
    searchTerm: string;
};
