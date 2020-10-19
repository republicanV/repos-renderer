// External dependencies
import React, { FC } from "react";
import { Layout } from "antd";

// Local modules
import { Title } from "header/styles";
import { TEXT_TITLE } from "header/texts";

const { Header } = Layout;

const CustomHeader: FC = () => (
  <Header>
    <Title>{TEXT_TITLE}</Title>
  </Header>
);

export default CustomHeader;
