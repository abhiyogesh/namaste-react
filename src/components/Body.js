import { useState, useEffect } from "react"; //hook
import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestraunts, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state variables update, react triggers a reconciliation cycle(re-render the component)
  console.log("Body Render");

  //hook for re rendering UI after API call
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3899664&lng=77.2979782&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //Optional Chaining
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunt(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

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
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterRestaurant = listofRestraunts.filter((res) =>
                res.data.name.toLowerCase().includes(searchText)
              );
              setFilteredRestraunt(filterRestaurant);
              console.log(searchText);
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
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restraunt) => (
          <Link
            key={restraunt.data.id}
            to={"/restaurants/" + restraunt.data.id}
          >
            <RestrauntCard resData={restraunt} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
