import React from "react";
import styles from "./Navigation.module.css";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import UserContext from "../../lib/UserContext";
import Link from "next/link";
import { NavigationProps } from "./NavigationProps";

export default function Navigation({ toggle }: NavigationProps) {
  const router = useRouter();
  const { saveUser } = useContext(UserContext);
  const logout = () => {
    saveUser(null);
    router.push("./");
  };

  return (
    <div className={toggle ? styles.showNav : styles.closeNav}>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Profiles</Link>
          </li>
          <li>
            <Link href="/">Blogs</Link>
          </li>
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
