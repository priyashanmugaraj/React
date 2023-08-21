import { useEffect, useState } from "react";
import { menuItems_URL } from "../utils/constant";
const useRestoMenu = (id) => {
  const [resMenu, SetresMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let restoMenu = await fetch(menuItems_URL + "restaurantId=" + id);
    let menuItems = await restoMenu.json();
    SetresMenu(menuItems);
  };
  return resMenu;
};

export default useRestoMenu;
