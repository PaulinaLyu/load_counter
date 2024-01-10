export interface TableProps<T, D> {
  data: D[];
  rows: Record<keyof T, string>;
  header: string[];
}
