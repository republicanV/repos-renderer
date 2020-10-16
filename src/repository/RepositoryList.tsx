// External dependencies
import React, { FC, useState, useEffect } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useDebounce } from "use-debounce";
import { Spin, Pagination, List, Space } from 'antd';
import { StarOutlined, ForkOutlined, BookOutlined } from '@ant-design/icons';

// Local modules
import { GET_REPOS } from 'api/queries';
import { getCurrentRepos } from 'repository/utils';
import { IRepositoryListProps } from 'repository/interfaces';
import { StyledTypography } from 'repository/styles';
import { TEXT_ERROR, TEXT_NO_RESULTS } from 'repository/texts';
import { DELAY_MSEC, ITEMS_COUNT } from 'repository/constants';

const RepositoryList: FC<IRepositoryListProps> = ({ searchTerm }) => {
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reposPerPage, setreposPerPage] = useState(10);

    // Delay search query fro DELAY_MSEC
    const [debouncedSearchTerm] = useDebounce(searchTerm, DELAY_MSEC);

    // Query for the repos and get first ITEMS_COUNT 
    const { data, loading, error } = useQuery(GET_REPOS,
        { variables: { search_term: debouncedSearchTerm, first: ITEMS_COUNT } }
    );

    useEffect(() => {
        setRepos(data?.search?.edges);
    }, [data]);

    // Get a portion of the repos array for pagination
    const currentRepos = getCurrentRepos(currentPage, reposPerPage, repos);

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
    const handleChange = (page: number, pageSize: number) => {
        page !== currentPage && setCurrentPage(page);
        pageSize !== reposPerPage && setreposPerPage(pageSize);
    };

    const IconText = ({ icon, text }: any) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    // Show spinner if data is loading
    if (loading) {
        return (
            <Spin />
        );
    }

    if (error) {
        return (
            <StyledTypography>
                {TEXT_ERROR}
            </StyledTypography>
        );
    }

    // Show message if there are no repositories
    if (!data?.search?.repositoryCount) {
        return (
            <StyledTypography>
                {TEXT_NO_RESULTS}
            </StyledTypography>
        );
    }

    return (
        <List
            footer={<Pagination defaultCurrent={1} total={100} onChange={(page, pageSize = 10) => handleChange(page, pageSize)} />}
            bordered
            itemLayout="vertical"
            dataSource={currentRepos}
            renderItem={({ node: { name, url, owner: { login: ownerLogin }, forkCount, stargazers: { totalCount: totalStarCount } } }) => (
                <List.Item
                    actions={[
                        <IconText icon={StarOutlined} text={totalStarCount} key="list-vertical-star-o" />,
                        <IconText icon={ForkOutlined} text={forkCount} key="list-vertical-fork-o" />,
                    ]}
                >
                    <List.Item.Meta
                        avatar={<IconText icon={BookOutlined} />}
                        title={<a href={url} target="_blank" rel="noopener noreferrer">{`${ownerLogin}/${name}`}</a>}
                    />
                </List.Item>
            )}
        />
    );
};

export default RepositoryList;
