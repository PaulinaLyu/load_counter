import { useEffect, useState } from "react";
import { Table } from "@/components/Table";
import { Status } from "@/components/Status";
import { getVulnerabilitiesData, getVulnerabilitiesDataResp } from "@/api";
import { toast } from "react-toastify";

const fack = [
  {
    framework_name: "gin",
    framework_version: "1.9.1",
    framework_lang: "Golang",
    vulnerability:
      "HTTP/2 server connections can hang forever waiting for a clean shutdown that was preempted by a fatal error. This condition can be exploited by a malicious client to cause a denial of service.",
    source_url: "https://github.com/gin-gonic/gin/issues/3332",

    is_actual: false,
  },
  {
    framework_name: "gin",
    framework_version: "1.9.1",
    framework_lang: "Golang",
    vulnerability:
      "An attacker can cause unbounded memory growth in servers accepting HTTP/2 requests.",
    source_url: "https://github.com/gin-gonic/gin/issues/3332",
    is_actual: false,
  },
  {
    framework_name: "userver",
    framework_version: "1.0.0",
    framework_lang: "C++",
    vulnerability:
      "This vulnerability affects some unknown functionality of the component HTTP Request Handler. The manipulation with an unknown input leads to a denial of service vulnerability. The CWE definition for the vulnerability is CWE-404. The product does not release or incorrectly releases a resource before it is made available for re-use. As an impact it is known to affect availability.",
    source_url: "https://github.com/gin-gonic/gin/issues/3332",
    is_actual: true,
  },
];

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

  const handleOnChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredTableData = tableData.filter((row) => {
      const keyName = e.currentTarget.name as keyof typeof rows;
      if (typeof row[keyName] === "string") {
        return row[keyName].includes(e.currentTarget.value);
      }
    });
    setTableData(filteredTableData);
  };

  const fetchTableData = async () => {
    // const response = await getVulnerabilitiesData();

    // if (response) {
    // const dataResp: getVulnerabilitiesDataResp[] = response?.data?.response;
    const dataResp: getVulnerabilitiesDataResp[] = fack;

    if (dataResp) {
      const updatedData = dataResp.map((item) => ({
        ...item,
        is_actual: <Status status={item.is_actual} />,
        source_url: <a href={item.source_url}>{item.source_url}</a>,
      }));
      setTableData(updatedData);
    }
    // } else {
    //   toast.error(`Ошибка при получении данных таблицы`);
    // }
  };

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
                  onChange={handleOnChangeInputs}
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
                  onChange={handleOnChangeInputs}
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
                  onChange={handleOnChangeInputs}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
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
