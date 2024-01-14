export const tableVulnerabilityMock = [
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
