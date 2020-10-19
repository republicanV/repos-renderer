// External dependencies
import React from "react";
import { cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";

// Local modules
import SearchInput from "search/SearchInput";
import { render } from "utils/test-utils";

describe("<SearchInput />", () => {
  afterEach(cleanup);

  it("renders successfully", () => {
    const { getByLabelText } = render(
      <SearchInput handleChangeValue={() => {}} value="" />,
      []
    );
    const searchElement = getByLabelText(/search/i);

    expect(searchElement).toBeInTheDocument();
  });

  it("has a proper search value", () => {
    render(<SearchInput handleChangeValue={() => {}} value="react" />, []);
    const inputElement = screen.getByDisplayValue(/react/i);

    expect(inputElement).toBeTruthy();
  });
});
