import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { ActivityIndicator } from "../components/ActivityIndicator/ActivityIndicator";
import styles from "../styles/Welcome.module.css";
import Layout from "../components/Layout/Layout";
import UserContext from "../lib/UserContext";

export default function Welcome() {
  const [message, setMessage] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      console.log("Now in welcome screen", user);
      if (!user) {
        // if global state doesn't have user data:
        // redirect to login page
        router.push("./login");
        console.log("No saved user found, will redirect to login page");
        return;
      } else {
        // if global state has user data:
        // show login page and
        // display a "Welcome" message notification for 5 seconds and vanish it
        await massageDisplay(5);
        console.log("Global state has user data", user);
      }
      //await wait(1);
      setIsLoading(false);
    })();
  }, [router, user]);

  // This code is for testing of loading indicator
  //   function wait(seconds: number) {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve("");
  //       }, seconds * 1000);
  //     });
  //   }

  function massageDisplay(seconds: number) {
    setTimeout(() => {
      setMessage(false);
    }, seconds * 1000);
  }

  if (isLoading) return <ActivityIndicator />;
  return user ? (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Mypage</h1>
        {message ? <p className={styles.welcomeMessage}> Welcome Back {user.displayName}</p> : null}
      </div>
    </Layout>
  ) : null;
}
