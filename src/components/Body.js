import RestoCards from "./RestoCards";
import { useEffect, useState } from "react";
import SimmerComponent from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, SetsearchText] = useState("");
  const onlineStatus = useOnlineStatus();

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

  if (onlineStatus == false) {
    return <h1>Could you Please Check Your Internet Connections..........</h1>;
  }

  if (resList.length == 0) {
    return <SimmerComponent></SimmerComponent>;
  }

  return (
    <div className=" m-1 py-4 ">
      <div className="flex items-center">
        <input
          type="text"
          className=" border border-solid to-black"
          value={searchText}
          onChange={(e) => {
            SetsearchText(e.target.value);
          }}
        ></input>

        <button
          className="px-2 m-1 bg-green-300 rounded-md"
          onClick={() => {
            let filterRes = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResList(filterRes);
          }}
        >
          Search
        </button>
        <div>
          <button
            className="px-2 m-1 bg-blue-300 rounded-md"
            onClick={() => {
              const filteredRestaurant = resList.filter(
                (filteredRes) => filteredRes.info.avgRating > 4
              );
              setFilteredResList(filteredRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className=" py-3 flex flex-wrap">
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
