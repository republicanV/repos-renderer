// External dependencies
import React, { FC } from "react";
import { Spin, Pagination, List, Space } from "antd";
import { StarOutlined, ForkOutlined, BookOutlined } from "@ant-design/icons";

// Local modules
import { IRepositoryListProps } from "repository/interfaces";
import { StyledTypography } from "repository/styles";
import { TEXT_ERROR, TEXT_NO_RESULTS } from "repository/texts";

const RepositoryList: FC<IRepositoryListProps> = ({
  currentRepos,
  handleChangePage,
  loading,
  error,
  hasNoRepositoryCount,
}) => {
  const IconText = ({ icon, text }: any) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  // Show spinner if data is loading
  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <StyledTypography>{TEXT_ERROR}</StyledTypography>;
  }

  // Show message if there are no repositories
  if (hasNoRepositoryCount) {
    return <StyledTypography>{TEXT_NO_RESULTS}</StyledTypography>;
  }

  return (
    <List
      footer={
        <Pagination
          defaultCurrent={1}
          total={100}
          onChange={(page, pageSize = 10) => handleChangePage(page, pageSize)}
        />
      }
      bordered
      itemLayout="vertical"
      dataSource={currentRepos}
      renderItem={({
        node: {
          name,
          url,
          owner: { login: ownerLogin },
          forkCount,
          stargazers: { totalCount: totalStarCount },
        },
      }) => (
        <List.Item
          actions={[
            <IconText
              icon={StarOutlined}
              text={totalStarCount}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={ForkOutlined}
              text={forkCount}
              key="list-vertical-fork-o"
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<IconText icon={BookOutlined} />}
            title={
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >{`${ownerLogin}/${name}`}</a>
            }
          />
        </List.Item>
      )}
      data-testid="repos-list"
    />
  );
};

export default RepositoryList;
