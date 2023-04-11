import { useState } from "react";
import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const[listofRestraunts ,setListOfRestraunt] = useState(resList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=>{
            const filteredList = listofRestraunts.filter(res=>res.data.avgRating>4);
            setListOfRestraunt(filteredList);
          }}>
            Top Rated Restraunts</button>
          </div>
        <div className="res-container">
          {
              listofRestraunts.map(restraunt =>( 
              <RestrauntCard key ={restraunt.data.id} resData ={restraunt} />
              ))
          }
        </div>
      </div>
    );
  };

  export default Body;