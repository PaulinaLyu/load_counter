import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { GET_LOADS_URL } from "../consts";
import { getLoadsData } from "../api";

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
  const [tableData, setTableData] = useState<TableData<typeof rows>[]>([
    {
      framework_name: "gin",
      framework_version: "1.9.1",
      framework_lang: "Golang",
      status: "FINISHED SUCCESSFULLY",
      type: "line",
      url: <a href="https://overload.yandex.net/670586">{"https://overload.yandex.net/670586"}</a>,
      description: "",
    },
    {
      framework_name: "gin",
      framework_version: "1.9.1",
      framework_lang: "Golang",
      status: "FINISHED SUCCESSFULLY",
      type: "line",
      url: <a href="https://overload.yandex.net/667716">{"https://overload.yandex.net/667716"}</a>,
      description: "",
    },
    {
      framework_name: "userver",
      framework_version: "1.0.0",
      framework_lang: "C++",
      status: "FINISHED SUCCESSFULLY",
      type: "line",
      url: <a href="https://overload.yandex.net/667591">{"https://overload.yandex.net/667591"}</a>,
      description: "",
    },
  ]);

  const fetchTableData = async () => {
    const response = await getLoadsData();

    if (response) {
      if (response?.data?.response) {
        setTableData(response?.data?.response);
      }
    } else {
      console.error(`Ошибка запроса ${GET_LOADS_URL}`);
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
            <Table header={header} rows={rows} data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
};
