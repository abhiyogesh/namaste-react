import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  const mystyle = {
    wordBreak: "break-word",
  };

  const { resData } = props;

  const {loggedInUser} = useContext(UserContext)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
  } = resData?.info;
 
  const {
deliveryTime
  } = resData?.info.sla;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 style={mystyle}>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component

//input- RestaurantCard
//Output - RestaurantCardPromoted

export const withPromotedLabel = (RestrauntCard) => {
  //it is returning a component
  // when we are passing data from body then props will come in the return callback function
  //why we are doing this
  //Higher orders are pure functions, it will not change the behaviour of cards in anyway, or we are not doing any modification
  //we are only enhancing our restaurant card
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
