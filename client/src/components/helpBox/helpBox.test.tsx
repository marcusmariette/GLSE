import React from 'react';
import { render, screen } from "@testing-library/react";
import HelpBox from "./HelpBox";
import '@testing-library/jest-dom'

describe("when an error with the query occurs", () => {
  it("should show the correct error message box", () => {
    render(
    <HelpBox parameter={''} name={''} description={'Hey guys, my name is Michael, but most people call me Caf. Thanks for watching.'} examples={[]} />
    ); 
    expect(
      screen.getByText(/Hey guys, my name is Michael, but most people call me Caf. Thanks for watching./)
    ).toBeInTheDocument();
  });
});