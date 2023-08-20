import { useEffect, useState } from "react";

const Contactus = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hai");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useEffect Is Rendered.....");
    };
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <h2>This is contact us...</h2>
    </div>
  );
};

export default Contactus;
