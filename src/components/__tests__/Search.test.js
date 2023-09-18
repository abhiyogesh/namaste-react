 // it will include body component which will have input boxes , promoted card,making an API call.

 import { fireEvent, render, screen } from "@testing-library/react"
 import Body from "../Body"
 import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
 
 global.fetch = jest.fn(()=>{

    return Promise.resolve({

        json :()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
 });

 it("should render the body component with search button",async ()=>{

    await act(async ()=> render(
    <BrowserRouter><Body /></BrowserRouter>));

    const  searchBtn = screen.getByRole("button", {name : "Search"});
    console.log(searchBtn);
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");
    //console.log(searchInput);

    fireEvent.change(searchInput, {target :{value : "burger"}});
    fireEvent.click(searchBtn);


//screen should load 4 res cards  
const cards = screen.getAllByTestId("resCard");
expect(cards.lenght).toBe(4);
 });