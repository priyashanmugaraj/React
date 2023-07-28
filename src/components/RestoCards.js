import { Resto_URL } from "../utils/constant";

const RestoCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="resto-card">
      <img className="resto-logo" src={Resto_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating + " Ratings"}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestoCards;
