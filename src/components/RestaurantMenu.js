import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestrauntMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); // to fetch the dynamic id

  //written for custom hook created for optimising the app.
  const resInfo = useRestaurantMenu(resId);

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
  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR.cards[1].card.card;
  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <p>
        {resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- {"INR."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
