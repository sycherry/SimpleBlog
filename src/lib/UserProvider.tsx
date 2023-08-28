import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { UserType } from "./UserType";
import { UserProps } from "./UserProps";

export const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState<UserType>({
    id: 0,
    displayName: "",
    imageUrl: "",
  });
  useEffect(() => {
    // get user data from a session storage
    const currentUser = JSON.parse(sessionStorage.getItem("user")!);
    setUser(currentUser);
  }, []);

  const saveUser = (userData: UserType) => {
    const jsonObj = JSON.stringify(userData);
    // set user data to a session storage
    sessionStorage.setItem("user", jsonObj);
    setUser(userData);
  };
  return <UserContext.Provider value={{ user, saveUser }}>{children}</UserContext.Provider>;
};
