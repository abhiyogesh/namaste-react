//import { useState } from "react";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestrauntMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); // to fetch the dynamic id

  //written for custom hook created for optimising the app.
  const resInfo = useRestaurantMenu(resId);

  const[showIndex , setShowIndex] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API_URL + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  //const { cuisines, costForTwoMessages} =
  // console.log(
  //   resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR.cards[1].card.card
  // );

  //console.log(resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR.cards);
  //const { itemCards } =
   // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
  //["@type"] - when we are not proper naming convention for properties in javascript we write like this , e.g here @ coming in front of type
  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log("categories::", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      {/** categories accordians */}
      {categories.map((category, index) => (
        //controlled components
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
