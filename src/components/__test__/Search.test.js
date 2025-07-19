import { act, render, screen } from "@testing-library/react"
import MOCK_DATA from "../../components/mocks/mockResListData.json"
import { Body } from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { fireEvent } from "@testing-library/react";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        },
});
});

describe("tests for the restaurant card button features",()=>{

    it("should search fot the res card after seach", async() => {
        await act( async () => 
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
            )
        )
       
        const searchBtn = screen.getByRole("button", {name: "Search"});
    
        const searchInput = screen.getByTestId("search-input");
    
        fireEvent.change(searchInput,{target: {value: "pizza"}});
    
        fireEvent.click(searchBtn);
    
        // console.log(searchBtn);
    
        const resCards = screen.getAllByTestId("res-card");
    
        expect(resCards.length).toBe(3);
    
    }),

    it("should search for the res-cards after click top rated restaurants", async()=>{
        await act(async ()=>{
            render(
                <BrowserRouter>
                    <Body/>
                </BrowserRouter>
            )
        })
        const filterBtn = screen.getByRole("button",{name: "Top Rated Restaurants"})

        fireEvent.click(filterBtn);

        const resCards = screen.getAllByTestId("res-card");
    
        expect(resCards.length).toBe(12);
    })
})

