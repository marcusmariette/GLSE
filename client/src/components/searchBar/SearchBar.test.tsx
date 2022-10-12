import React from 'react';
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

import '@testing-library/jest-dom'

describe("when an error with the query occurs", () => {
  it("should show the correct error message box", () => {
    render(
        <SearchBar setSearchString={setSearchString} searchString={"searchString"} />
    ); 
    expect(
        screen.getByRole("IconButton")
      ).toBeInTheDocument();
  });
});

// IDK