import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./ActivityIndicator.module.css";

export function ActivityIndicator() {
  return (
    <ClipLoader
      className={styles.activityIndicator}
      color={"#000000"}
      loading={true}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
