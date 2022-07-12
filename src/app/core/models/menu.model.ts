export interface MenuDataNode {
  name: string;
  id: number;
  parentId: number | null;
  isExpandable?: boolean;
}
