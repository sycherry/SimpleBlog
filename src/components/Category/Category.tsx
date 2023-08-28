import React from "react";
import styles from "./Category.module.css";
import { CategoryProps } from "./Category.props";
import { CategoryType } from "../../models/CategoryType";

export default function Category({ categories, filterCategory }: CategoryProps) {
  return (
    <ul className={styles.categories}>
      <li className={styles.selected} onClick={() => filterCategory("all")}>
        <a>All</a>
      </li>
      {categories.map((item: CategoryType, i: number) => (
        <li key={i} onClick={() => filterCategory(item.id)}>
          <a>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
