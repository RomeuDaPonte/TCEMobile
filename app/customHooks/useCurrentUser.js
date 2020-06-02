import { useState, useEffect } from "react";
import { getCurrentUser } from "../services/accountService";

export const UseCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    (function () {
      getCurrentUser().then((user) => setCurrentUser(user));
    })();
  }, []);

  return { currentUser };
};
