import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../utils/mockData";


const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);

    return (
        <div className="body">
            <div className="search">Search</div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants
                            .filter((res) => res.info.avgRating > 4)
                            .sort((a, b) => b.info.avgRating - a.info.avgRating)
                            .slice(0, 10);
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top 10 Restaurants
                </button>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                ))};
            </div>
        </div>
    );
};

export default Body;