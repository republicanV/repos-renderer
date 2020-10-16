// External dependencies
import React, { FC } from 'react';
import { Layout } from 'antd';

// Local modules
import { Title } from 'layout/styles';
import { TEXT_TITLE } from 'layout/texts';

const { Header } = Layout;

const CustomHeader: FC = () => (
    <Header>
        <Title>
            {TEXT_TITLE}
        </Title>
    </Header>
);

export default CustomHeader;
