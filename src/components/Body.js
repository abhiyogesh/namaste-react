import {useEffect, useState, useContext } from "react"; //hook
import resList from "../utils/mockData";
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestraunts, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  //console.log(listofRestraunts);

  const RestaurnatCardPromoted = withPromotedLabel(RestrauntCard);

  //Whenever state variables update, react triggers a reconciliation cycle(re-render the component)
  //console.log("Body Render");

  //hook for re rendering UI after API call
  useEffect(() => {
    //console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3899664&lng=77.2979782&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log('json::',json);
    //Optional Chaining
    // setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    console.log('json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants::',json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    setListOfRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    setFilteredRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

    const {loggedInUser,setUserName} = useContext(UserContext);

  //Conditional Rendering
  // if(listofRestraunts.length === 0){
  //   return <Shimmer />
  // }
  return listofRestraunts.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid ="searchInput"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterRestaurant = listofRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestraunt(filterRestaurant);
              //console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listofRestraunts.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestraunt(filteredList);
            }}
          >
            Top Rated Restraunts
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input className="border border-black p-2" 
          value ={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restraunt) => (
          <Link
            key={restraunt.info.id}
            to={"/restaurants/" + restraunt.info.id}
          >
            {
              /** if the restaurant is promoted thne add a promoted label to it */
               restraunt.info.promoted ? (
                <RestaurnatCardPromoted resData={restraunt} />
               ) : (
                <RestrauntCard resData={restraunt} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
