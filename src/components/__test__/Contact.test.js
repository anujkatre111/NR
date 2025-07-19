import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";//we imported the whole library instead os a ceratin thing
import { describe } from "node:test";


describe("Contact Us Page Test Case",()=>{
    test("Should load button inside Contact component", () => {
        render(<Contact/>);
        
        // const button =  screen.getByRole("button");//this is one way to find the button
        //There are more ways to find the button
        const button = screen.getByRole("button");
    
        // const heading = screen.getByRole("heading");
    
        //Asertion
        expect(button).toBeInTheDocument();
    });
    
    
    
    test("Should load button inside Contact component", () => {
        render(<Contact/>);
        
        // const button =  screen.getByRole("button");//this is one way to find the button
        //There are more ways to find the button
        const inputName = screen.getByPlaceholderText("name");
    
        // const heading = screen.getByRole("heading");
    
        //Asertion
        expect(inputName).toBeInTheDocument();
    });
    
    
    test("Should load 2 input Boxes inside Contact component", () => {
        render(<Contact/>);
        
        // const button =  screen.getByRole("button");//this is one way to find the button
        //There are more ways to find the button
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        // const heading = screen.getByRole("heading");
    
        //Asertion
        expect(inputBoxes.length).toBe(2);
    });
    
    
})


