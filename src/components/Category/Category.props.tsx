import { CategoryType } from "../../models/CategoryType";

export type CategoryProps = {
  categories: CategoryType[];
  filterCategory: (value: string) => void;
};
