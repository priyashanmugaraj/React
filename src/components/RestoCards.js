import { Resto_URL } from "../utils/constant";

const RestoCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className=" p-1 m-1 w-[300px] bg-gray-50 rounded-lg h-[550px] border-2 max-w-md border-gray-200">
      <img className=" rounded-md" src={Resto_URL + cloudinaryImageId}></img>
      <h3 className=" font-bold text-2xl">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating + " Ratings"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestoCards;
