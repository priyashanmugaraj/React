import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="User-Card">
      <h1>count:{count}</h1>
      <h1>count1:{count1}</h1>
      <h1>Name:{name}</h1>
      <h1>Locations:{location}</h1>
      <h1>Contact:{"priya@gmail.com"}</h1>
    </div>
  );
};

export default User;
