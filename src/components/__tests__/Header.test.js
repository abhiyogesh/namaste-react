import {fireEvent, render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/Store/appStore";
import "@testing-library/jest-dom"
 
//Unit testing
 
it("Should render Header Component with a login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    //assert
    const loginButton = screen.getByRole("button", {name : "Login" });
    

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", ()=>{
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    //assert
    const loginButton = screen.getByRole("button", {name : "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout" });
    

    expect(logoutButton).toBeInTheDocument();
});