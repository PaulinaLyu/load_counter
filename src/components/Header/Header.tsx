import { useEffect, useState } from "react";
import { navigation } from "../../mocks/navMock";
import { useLocation } from "react-router-dom";

export const Header = () => {
  let location = useLocation();
  const [title, setTitle] = useState("Главное меню");

  useEffect(() => {
    navigation.forEach((item) => {
      if (item.href === location.pathname) {
        setTitle(item.name);
      }
    });
  }, [location]);

  return (
    <header className="bg-white border-b-5 border-indigo-500">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-700">{title}</h1>
      </div>
    </header>
  );
};
