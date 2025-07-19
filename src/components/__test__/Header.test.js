import { Provider } from "react-redux";
import { Header } from "../Header"
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render Header Component with a Cart Items 0 ",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
     );

    // const loginButton = screen.getByRole("button",{name: "Log In"});
    const loginButton = screen.getByRole("button",{name: "Log In"});

    fireEvent.click(loginButton);

     const logoutButton = screen.getByRole("button",{name: "defaultUser"});

    expect(logoutButton).toBeInTheDocument();
})

