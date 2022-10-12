import React from 'react';
import { render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults";
import '@testing-library/jest-dom'

describe("when an error with the query occurs", () => {
  it("should show the correct error message box", () => {
    render(
    <SearchResults setSearchString={function (value: React.SetStateAction<string>): void {
            throw new Error('Function not implemented.');
        } } searchString={'General Kenobi'}  />
    ); 
    expect(
      screen.getByText(/I would like some milk now./)
    ).toBeInTheDocument();
  });
});