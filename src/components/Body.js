import RestoCards from "./RestoCards";
import { useEffect, useState } from "react";
import SimmerComponent from "./shimmer";
const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, SetsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0521019&lng=80.22552859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING      "
    );
    let resInput = await data.json();
    setResList(
      resInput.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      resInput.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (resList.length == 0) {
    return <SimmerComponent></SimmerComponent>;
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search"
          value={searchText}
          onChange={(e) => {
            SetsearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-filter"
          onClick={() => {
            let filterRes = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText)
            );
            setFilteredResList(filterRes);
          }}
        >
          Search
        </button>
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
        {filteredResList.map((res_info) => (
          <RestoCards key={res_info.info.id} resData={res_info}></RestoCards>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
