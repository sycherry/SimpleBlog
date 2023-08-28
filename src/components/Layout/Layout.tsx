import React, { useState } from "react";
import styles from "./Layout.module.css";
import Link from "next/link";
import Image from "next/image";
import { LayoutProps } from "./LayoutProps";
import { useContext } from "react";
import UserContext from "../../lib/UserContext";
import Navigation from "../Navigation/Navigation";

export default function Layout({ children }: LayoutProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  const clickToggle = () => {
    setToggle((state) => !state);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <h1>Hot coffee</h1>
        </Link>

        {!user ? (
          <Link href="/login" className={styles.login}>
            Login
          </Link>
        ) : (
          <>
            <div className={styles.userWrapper}>
              <Image
                className={styles.userIcon}
                width={32}
                height={32}
                alt={user.displayName}
                title={user.displayName}
                src={user.imageUrl}
              />{" "}
              <a className={styles.displayName}>{user.displayName}</a>
              <a onClick={clickToggle} className={styles.icon}>
                {toggle ? "˄" : "˅"}
              </a>
            </div>
          </>
        )}
      </header>

      {user ? <Navigation toggle={toggle} /> : null}

      <main>{children}</main>
    </>
  );
}
