interface ICategories {
  value: string;
  label: string;
}

export interface ICategoryList {
  categories: ICategories[];
  selectingItem: string;
}
