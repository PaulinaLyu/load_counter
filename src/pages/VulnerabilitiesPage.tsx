import { useEffect, useState } from "react";
import { Table } from "@/components/Table";
import { Status } from "@/components/Status";
import { getVulnerabilitiesData, getVulnerabilitiesDataResp } from "@/api";
import { toast } from "react-toastify";

const header = ["Название", "Версия", "Язык", "Описание уязвимости", "Источник", "Актуальность"];
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

  const [filteredData, setFilteredData] = useState<TableData<typeof rows>[]>([]);
  const [filterName, setFilterName] = useState("");
  const [filterVersion, setFilterVersion] = useState("");
  const [filterLang, setFilterLang] = useState("");

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
        setFilteredData(updatedData);
      }
    } else {
      toast.error(`Ошибка при получении данных таблицы`);
    }
  };

  useEffect(() => {
    const filteredData = tableData.filter((item) => {
      if (
        typeof item.framework_lang === "string" &&
        typeof item.framework_version === "string" &&
        typeof item.framework_name === "string"
      ) {
        return (
          item.framework_name.toLowerCase().includes(filterName.toLowerCase()) &&
          item.framework_version.toLowerCase().includes(filterVersion.toLowerCase()) &&
          item.framework_lang.toLowerCase().includes(filterLang.toLowerCase())
        );
      }
    });
    setFilteredData(filteredData);
  }, [filterName, filterVersion, filterLang, tableData]);

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="mb-10 flex flex-wrap">
            <div className="w-full pr-3 sm:w-1/3">
              <div>
                <label
                  htmlFor="framework_name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Название
                </label>
                <input
                  name="framework_name"
                  id="framework_name"
                  placeholder="Название"
                  value={filterName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterName(e.currentTarget.value);
                  }}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full pr-3 sm:w-1/3">
              <div>
                <label
                  htmlFor="framework_version"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Версия
                </label>
                <input
                  name="framework_version"
                  id="framework_version"
                  placeholder="Версия"
                  value={filterVersion}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterVersion(e.currentTarget.value);
                  }}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div>
                <label
                  htmlFor="framework_lang"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Язык
                </label>
                <input
                  name="framework_lang"
                  id="framework_lang"
                  placeholder="Язык"
                  value={filterLang}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterLang(e.currentTarget.value);
                  }}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <Table header={header} rows={rows} data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};
