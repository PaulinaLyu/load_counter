import { NavLink, useLocation } from "react-router-dom";
import { navigation } from "../../mocks/navMock";
import { joinClassNames } from "@/utils/joinClassNames";

export const Nav = () => {
  let location = useLocation();
  return (
    <>
      <div className="border-b-5 border-gray-900 min-h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between ">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={joinClassNames(
                        location.pathname === item.href
                          ? "border-b-2 border-indigo-500"
                          : "hover:border-b-2 hover:border-indigo-500 font-medium text-gray-400",
                        "px-3 py-5 text-sm font-medium"
                      )}
                      aria-current={location.pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
