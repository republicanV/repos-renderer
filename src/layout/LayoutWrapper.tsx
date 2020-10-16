// External dependencies
import React, { FC } from 'react';
import { Layout } from 'antd';

// Local modules
import CustomHeader from 'layout/CustomHeader';
import { ILayoutWrapperProps } from 'layout/interfaces';
import { Content } from 'layout/styles';

const LayoutWrapper: FC<ILayoutWrapperProps> = ({children}) => {
    return (
        <Layout>
            <CustomHeader />
            <Content>
                {children}
            </Content>
        </Layout>
    );
};

export default LayoutWrapper;
