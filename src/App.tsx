import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLayout from "@/layout/PageLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { MainPage } from "@/pages/MainPage";
import { TestResultsPage } from "@/pages/TestResultsPage";
import { VulnerabilitiesPage } from "@/pages/VulnerabilitiesPage";
import { LoadFrameworkPage } from "@/pages/LoadFrameworkPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tests-results" element={<TestResultsPage />} />
          <Route path="/vulnerabilities" element={<VulnerabilitiesPage />} />
          <Route path="/load-framework" element={<LoadFrameworkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
