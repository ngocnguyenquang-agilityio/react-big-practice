export enum COLLECTION_TYPE {
  SORT = 'sort',
  CATEGORY = 'category',
}

interface IListCollection {
  value: string;
  label: string;
}

export interface ICollection {
  title: string;
  list: IListCollection[];
  type: COLLECTION_TYPE;
  selected?: string;
}
