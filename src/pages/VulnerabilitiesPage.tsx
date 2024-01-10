import { useState } from "react";

export const VulnerabilitiesPage = () => {
  const [tableData, setTableData] = useState([
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
      source_url: "https://vuldb.com/?id.216736",
      is_actual: true,
    },
  ]);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Язык
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Название
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Версия
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Источник
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Описание уязвимости
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Актуальность
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {tableData.map((item) => (
                  <tr className="align-top">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.framework_lang}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {item.framework_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {item.framework_version}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href={item.source_url}>{item.source_url}</a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-wrap">
                      {item.vulnerability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {item.is_actual}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
