import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import '@testing-library/jest-dom'

describe("The logo in the header is pressed", () => {
  it("should call navigate the callback", () => {

    const navigateMock = jest.fn();
    render(
    <header></header>
    ); 

    fireEvent.click(screen.getByRole("button"));
    expect(navigateMock).toHaveBeenCalledWith(
      "Waves sent to Test Name!");
  });
});




// // componets/Greetings.test.tsx
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// // ...

// describe("when the button is pressed", () => {
//   it("should call the `onSendWaves` callback", () => {
//     const onSendWavesMock = jest.fn();
//     render(
//       <Greetings 
//         name="Test Name" 
//         onSendWaves={onSendWavesMock} />
//     );
    
//     fireEvent.click(screen.getByRole("button"));
//     expect(onSendWavesMock).toHaveBeenCalledWith(
//       "Waves sent to Test Name!");
//   });
// });
