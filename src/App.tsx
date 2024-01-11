import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLayout from "@/layout/PageLayout";
import { MainPage } from "@/pages/MainPage";
import { lazy } from "react";

const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  }))
);

const TestResultsPage = lazy(() =>
  import("@/pages/TestResultsPage").then((module) => ({
    default: module.TestResultsPage,
  }))
);

const VulnerabilitiesPage = lazy(() =>
  import("@/pages/VulnerabilitiesPage").then((module) => ({
    default: module.VulnerabilitiesPage,
  }))
);

const LoadFrameworkPage = lazy(() =>
  import("@/pages/LoadFrameworkPage").then((module) => ({
    default: module.LoadFrameworkPage,
  }))
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tests-results" element={<TestResultsPage />} />
          <Route path="/vulnerabilities" element={<VulnerabilitiesPage />} />
          <Route path="/load-framework" element={<LoadFrameworkPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
