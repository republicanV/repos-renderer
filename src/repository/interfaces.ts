export interface Node {
  node: {
    forkCount: number;
    name: string;
    url: string;
    owner: {
      login: string;
    };
    stargazers: {
      totalCount: number;
    };
  };
}

export interface IRepositoryListProps {
  currentRepos: Node[];
  handleChangePage: (page: number, pageSize: number) => void;
  loading: boolean;
  error: any;
  hasRepositoryCount: boolean;
}
