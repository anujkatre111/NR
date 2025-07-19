import { RestaurantCard, withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../../components/mocks/restaurantPromoted.json"
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render restaurant card component with data", () => {
    
})

it("Should render restaurant card component with promoted label",()=>{
    const Comp = withPromotedLabel(RestaurantCard);
    render(
      <Comp resData={MOCK_DATA}/>
    );

    const name = screen.getByText("Open");

    expect(name).toBeInTheDocument();
})