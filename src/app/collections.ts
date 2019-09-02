export interface Collection {
  name: string;
  items: Item[];
}

export interface Item {
  id: number;
  title: string;
  content: string;
}
