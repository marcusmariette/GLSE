import React from 'react';
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";
import '@testing-library/jest-dom'

describe("when an error with the query occurs", () => {
  it("should show the correct error message box", () => {
    render(
    <ErrorMessage errorMessage={"An error has occurred."}/>
    ); 
    expect(
      screen.getByText(/An error has occurred./)
    ).toBeInTheDocument();
  });
});