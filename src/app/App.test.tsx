// External dependencies
import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";

// Local modules
import App from "app/App";

describe("<App />", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
