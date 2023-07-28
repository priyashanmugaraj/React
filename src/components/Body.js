import RestoCards from "./RestoCards";
import resObj from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [resList, setResList] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = resList.filter(
              (filteredRes) => filteredRes.info.avgRating > 4
            );
            setResList(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-containers">
        {resList.map((res_info) => (
          <RestoCards key={res_info.info.id} resData={res_info}></RestoCards>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
