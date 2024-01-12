import { useEffect, useState } from "react";
import { Table } from "@/components/Table";
import { Status } from "@/components/Status";
import { getVulnerabilitiesData, getVulnerabilitiesDataResp } from "@/api";
import { toast } from "react-toastify";

const header = ["Язык", "Название", "Версия", "Описание уязвимости", "Источник", "Актуальность"];
const rows = {
  framework_name: "px-6 py-4 whitespace-normal text-sm font-medium text-neutral-800",

  framework_version: "px-6 py-4 whitespace-normal text-sm text-neutral-800",

  framework_lang: "px-6 py-4 whitespace-normal text-sm text-neutral-800",

  vulnerability: "px-6 py-4 whitespace-normal text-sm text-neutral-800",

  source_url: "px-6 py-4 whitespace-nowrap text-sm font-medium",

  is_actual: "px-6 py-4 whitespace-nowrap text-sm font-medium",
};

type TableData<T> = Record<keyof T, JSX.Element | string>;

export const VulnerabilitiesPage = () => {
  const [tableData, setTableData] = useState<TableData<typeof rows>[]>([]);

  const fetchTableData = async () => {
    const response = await getVulnerabilitiesData();

    if (response) {
      const dataResp: getVulnerabilitiesDataResp[] = response?.data?.response;

      if (dataResp) {
        const updatedData = dataResp.map((item) => ({
          ...item,
          is_actual: <Status status={item.is_actual} />,
          source_url: <a href={item.source_url}>{item.source_url}</a>,
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
