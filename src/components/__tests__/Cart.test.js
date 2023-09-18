import { fireEvent, render, screen } from "@testing-library/react";
import {act} from  "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";


global.fetch = jest.fn(()=>

Promise.resolve({
    json:()=> Promise.resolve(MOCK_DATA),
})
);

it("Should load the Restaurant Menu Component", async()=>{

    await act(async ()=> render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    <RestaurantMenu />
    <Cart />
    </Provider>
    </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Chilli Momo(2)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    const addBtns = screen.getAllByRole("button", {name : "Add +"});

   // console.log(addBtns.length);
   expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[0]);
    
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(4);

    fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    expect(screen.getByText("Cart is empty. Add Items to the cart!")
    ).toBeInTheDocument();

});