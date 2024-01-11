import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
          Страница не найдена
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
          Извините, страница, которую вы ищете, не найдена.
        </p>
        <NavLink
          to="/"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150"
        >
          Вернуться на Главную
        </NavLink>
      </div>
    </div>
  );
};
