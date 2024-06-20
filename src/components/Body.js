import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
    //local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    //search box 
    const [searchText, setSearchText] = useState("");
    useEffect (() => {
        console.log("use effect called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820"
        );
        const json = await data.json();

        console.log(json);
        // optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // conditional rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    placeholder="Search any" 
                    className="input-box" 
                    value={searchText} 
                    onChange={(e) => { 
                        setSearchText(e.target.value); 
                    }} 
                    />
                    <button onClick={ () => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                        >
                            Search
                    </button>
                </div>
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
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurants) => (
                    <RestaurantCard key={restaurants.info.id} restData={restaurants} />
                ))}
            </div>
        </div>
    );
};

export default Body;