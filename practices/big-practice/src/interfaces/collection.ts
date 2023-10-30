interface IListCollection {
  value: string;
  label: string;
}

export interface ICollection {
  title: string;
  list: IListCollection[];
  selected?: string;
}
