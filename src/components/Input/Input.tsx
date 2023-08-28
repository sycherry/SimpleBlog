import React from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";

export default function Input({ label, name, errors, register }: InputProps) {
  return (
    <div className={styles.label}>
      <p>
        <label htmlFor="name">{label}</label>
      </p>
      <input
        {...register(name)}
        className={styles.input}
        type={name === "email" ? "text" : "password"}
      />
      <p className={styles.errorMessage}>{errors?.message}</p>
    </div>
  );
}
