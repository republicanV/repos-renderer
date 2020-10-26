// External dependencies
import React, { FC } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";

// Local modules
import client from "api/apolloClient";
import { theme } from "app/theme";
import LayoutContainer from "layout/LayoutContainer";
import "app/App.css";

const App: FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <LayoutContainer />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
