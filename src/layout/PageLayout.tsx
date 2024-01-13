import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Header } from "@/components/Header";

const PageLayout = () => (
  <>
    <Nav />
    <Header />
    <main>
      <div className="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
        {" "}
        <Suspense fallback={"...Loading"}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  </>
);
export default PageLayout;
