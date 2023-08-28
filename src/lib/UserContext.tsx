import { createContext } from "react";
import { UserType } from "./UserType";

export type UserProps = {
  user: UserType | null;
  saveUser: (value: UserType | null) => void;
};

const UserContext = createContext<UserProps>({
  user: null,
  saveUser: () => {},
});
export default UserContext;
