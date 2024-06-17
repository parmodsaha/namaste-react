import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import restList from "../utils/mockData";


const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(
        restList[0].data.cards[0].card.card.gridElements.infoWithStyle.restaurants
    );
    // useEffect (() => {
    //     console.log("use effect called");
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820"
    //     );
    //     const json = await data.json();

    //     console.log(json);
    //     setListOfRestaurants(json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
    // };

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
                {listOfRestaurants.map((restaurants) => (
                    <RestaurantCard key={restaurants.info.id} restData={restaurants} />
                ))};
            </div>
        </div>
    );
};

export default Body;