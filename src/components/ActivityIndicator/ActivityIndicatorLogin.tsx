import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./ActivityIndicatorLogin.module.css";

export function ActivityIndicatorLogin() {
  return (
    <div className={styles.activityIndicatorOuter}>
      <ClipLoader
        className={styles.activityIndicator}
        color={"#000000"}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
