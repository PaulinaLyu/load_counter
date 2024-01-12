import { useEffect, useState } from "react";
import { Table } from "@/components/Table";
import { getLoadsData, getLoadsDataResp } from "@/api";
import { toast } from "react-toastify";

const header = ["Язык", "Название", "Версия", "Статус", "Тип нагрузки", "Визуализация", "Описание"];

const rows = {
  framework_name:
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200",

  framework_version: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200",

  framework_lang: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200",

  status: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200",

  type: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200",

  url: "px-6 py-4 whitespace-nowrap text-sm font-medium",

  description: "px-6 py-4 text-wrap text-sm font-medium",
};

type TableData<T> = Record<keyof T, React.ReactNode | string>;

export const TestResultsPage = () => {
  const [tableData, setTableData] = useState<TableData<typeof rows>[]>([]);

  const fetchTableData = async () => {
    const response = await getLoadsData();
    if (response) {
      const dataResp: getLoadsDataResp[] = response?.data?.response;
      if (dataResp) {
        const updatedData = dataResp.map((item) => ({
          ...item,
          url: <a href={item.url}>{item.url}</a>,
        }));

        setTableData(updatedData);
      }
    } else {
      toast.error(`Ошибка при получении данных таблицы`);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            {tableData.length > 0 ? (
              <Table header={header} rows={rows} data={tableData} />
            ) : (
              <span>Нет данных</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
