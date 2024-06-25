import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {restId} = useParams();
   

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + restId);
        const json = await data.json();

        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines?.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs."} 
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
