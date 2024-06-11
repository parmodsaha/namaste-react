import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { restData } = props;
    // const restaurantInfo = restData.card.gridElements.infoWithStyle.restaurants[0].info;

    // destructuring
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        cuisines,
        avgRating,
        sla: { slaString },
    } = restData?.info;

    return (
        <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="restro-image" alt="img" src=
            {CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{costForTwo}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} star</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default RestaurantCard;