import { useEffect, useState } from "react";
import SimmerComponent from "./shimmer";
import { useParams } from "react-router-dom";
import useRestoMenu from "../utils/useRestoMenu";

const RestoMenu = () => {
  const { id } = useParams();
  console.log(id);
  const resMenu = useRestoMenu(id);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   let restoMenu = await fetch(menuItems_URL + "restaurantId=" + id);
  //   let menuItems = await restoMenu.json();
  //   console.log(menuItems);
  //   SetresMenu(menuItems);
  // };

  const items = resMenu?.data?.cards[0]?.card?.card?.info;
  const menuItemsList =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;

  if (resMenu == null) {
    return <SimmerComponent></SimmerComponent>;
  }

  return (
    <div className="Menu">
      <h1>{items?.name}</h1>
      <h2>{items?.cuisines.join(",")}</h2>
      <h2>{items?.costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        {menuItemsList?.map((items) => (
          <li key={items.card.info.id}>
            {items?.card?.info?.name + "   "}- {"Rs"}
            {items?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestoMenu;
