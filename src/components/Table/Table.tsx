import { TableProps } from "./Table.type";

export const Table = <T, D>({ data, rows, header }: TableProps<T, D>) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {data.map((item, index) => (
          <tr key={index} className="align-top">
            {Object.entries(item).map(([key, value]) => {
              return (
                <td key={key} className={rows[key]}>
                  {value}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};