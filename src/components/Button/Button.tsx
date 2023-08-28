import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export default function Button({ text, onClick = null as any }: ButtonProps) {
  return (
    <button type="submit" onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
