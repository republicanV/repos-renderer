// External dependencies
import React, { FC } from "react";
import { Layout } from "antd";

// Local modules
import CustomHeader from "header/CustomHeader";
import { ILayoutWrapperProps } from "layout/interfaces";
import { Content } from "layout/styles";

const LayoutWrapper: FC<ILayoutWrapperProps> = ({ children }) => (
  <Layout>
    <CustomHeader />
    <Content>{children}</Content>
  </Layout>
);

export default LayoutWrapper;
