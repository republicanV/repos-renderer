// External dependencies
import React from "react";
import { cleanup } from "@testing-library/react";

// Local modules
import CustomHeader from "header/CustomHeader";
import { render } from "utils/test-utils";

describe("<CustomHeader />", () => {
  afterEach(cleanup);

  it("renders the main title", () => {
    const { getByText } = render(<CustomHeader />, []);
    const titleElement = getByText(/Find some repositories on GitHub/i);

    expect(titleElement).toBeInTheDocument();
  });
});
