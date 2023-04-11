import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
    const mystyle = {
        "wordBreak": "break-word",
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
      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4 style={mystyle}>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestrauntCard;