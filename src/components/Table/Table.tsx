import { TableProps } from "./Table.type";

export const Table = <T, D extends Record<keyof T, React.ReactNode>>({
  data,
  rows,
  header,
}: TableProps<T, D>) => {
  return (
    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
      <thead>
        <tr>
          {header.map((headerItem, index) => (
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              key={index}
            >
              {headerItem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
        {data.map((item, index) => (
          <tr key={index} className="align-top">
            {Object.entries(item).map(([key, value]) => {
              const keyString = key as keyof T;
              return (
                <td key={key} className={rows[keyString]}>
                  {value as React.ReactNode}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
