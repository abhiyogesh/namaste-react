import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import  "@testing-library/jest-dom";

//test("description",(callbackFunction)=>{

    //render('component')
    //screen is an object from react testing library;

//});

it("Should load contact us component",()=>{

  //  beforeAll(()=>{
 //These are the helper function by jest
  //  });

   // beforeEach(()=>{
//These are the helper function by jest
  //  });

   // afterEach(()=>{
//These are the helper function by jest
   // })
  //  afterAll(()=>{
//These are the helper function by jest
    //})

    render(<Contact />)
    const heading = screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();
});

it("Should load button inside Contact component",()=>{

    render(<Contact />)
    const heading = screen.getByRole("button");

    //assertion
    expect(heading).toBeInTheDocument();
});

it("Should load button inside Contact component",()=>{

    render(<Contact />)
    const text = screen.getByText("Submit");

    //assertion
    expect(text).toBeInTheDocument();
});


// it("Should load 2 input boxes on the  Contact component",()=>{

//     render(<Contact />)

//     //Querying
//     const inputBoxes = screen.getAllByRole("textbox");

//     //assertion
//     expect(inputBoxes).toBeInTheDocument();
//});