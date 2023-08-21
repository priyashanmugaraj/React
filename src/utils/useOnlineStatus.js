import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, SetonlineStatus] = useState(true);
  useEffect(() => {
    addEventListener("online", () => {
      SetonlineStatus(true);
    });
    addEventListener("offline", () => {
      SetonlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
