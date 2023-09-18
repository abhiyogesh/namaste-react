import {RestaurantCard} from "../RestrauntCard";
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


//Unit testing

it("Should Render the Restaurant Component with props data",()=>{

    render(<RestaurantCard resData ={MOCK_DATA} />);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
});

it("Should Render the RestaurantCard Component with Promoted Label",()=>{
});