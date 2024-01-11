import { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { Status } from "../components/Status";
import { getVulnerabilitiesData } from "../api";
import { GET_VULNERALBILITIES_URL } from "../consts";

const header = ["Язык", "Название", "Версия", "Источник", "Описание уязвимости", "Актуальность"];
const rows = {
  framework_name:
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200",

  framework_version: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200",

  framework_lang: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200",

  vulnerability: "px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-wrap",

  source_url: "px-6 py-4 whitespace-nowrap text-sm font-medium",

  is_actual: "px-6 py-4 whitespace-nowrap text-sm font-medium",
};

type TableData<T> = Record<keyof T, React.ReactNode | string>;

export const VulnerabilitiesPage = () => {
  const [tableData, setTableData] = useState<TableData<typeof rows>[]>([
    {
      framework_name: "gin",
      framework_version: "1.9.1",
      framework_lang: "Golang",
      vulnerability:
        "HTTP/2 server connections can hang forever waiting for a clean shutdown that was preempted by a fatal error. This condition can be exploited by a malicious client to cause a denial of service.",
      source_url: (
        <a href="https://github.com/gin-gonic/gin/issues/3332">
          {"https://github.com/gin-gonic/gin/issues/3332"}
        </a>
      ),
      is_actual: <Status status={false} />,
    },
    {
      framework_name: "gin",
      framework_version: "1.9.1",
      framework_lang: "Golang",
      vulnerability:
        "An attacker can cause unbounded memory growth in servers accepting HTTP/2 requests.",
      source_url: (
        <a href="https://github.com/gin-gonic/gin/issues/3332">
          {"https://github.com/gin-gonic/gin/issues/3332"}
        </a>
      ),
      is_actual: <Status status={false} />,
    },
    {
      framework_name: "userver",
      framework_version: "1.0.0",
      framework_lang: "C++",
      vulnerability:
        "This vulnerability affects some unknown functionality of the component HTTP Request Handler. The manipulation with an unknown input leads to a denial of service vulnerability. The CWE definition for the vulnerability is CWE-404. The product does not release or incorrectly releases a resource before it is made available for re-use. As an impact it is known to affect availability.",
      source_url: <a href="https://vuldb.com/?id.216736">{"https://vuldb.com/?id.216736"}</a>,
      is_actual: <Status status={true} />,
    },
  ]);

  const fetchTableData = async () => {
    const response = await getVulnerabilitiesData();

    if (response) {
      if (response?.data?.response) {
        setTableData(response?.data?.response);
      }
    } else {
      console.error(`Ошибка запроса ${GET_VULNERALBILITIES_URL}`);
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
