import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  const mystyle = {
    wordBreak: "break-word",
  };

  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 style={mystyle}>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
