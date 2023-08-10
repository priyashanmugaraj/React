import RestoCards from "./RestoCards";
import { useEffect, useState } from "react";
import SimmerComponent from "./shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, SetsearchText] = useState("");

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0521019&lng=80.22552859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body Is Rendered..........");

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
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
          <Link to={"restaurants/" + res_info.info.id} key={res_info.info.id}>
            <RestoCards resData={res_info}></RestoCards>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
