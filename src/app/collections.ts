export interface Collection {
  name: string;
  items: Item[];
}

export interface Item {
  title: string;
  description: string;
  content: string;
}
