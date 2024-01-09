const navigation = [
  { name: "Главное меню", href: "#", current: true },
  { name: "Список уязвимостей", href: "#", current: false },
  { name: "Результаты нагрузочного тестирования", href: "#", current: false },
  { name: "Нагрузить фреймворк", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// text-gray-300 hover:bg-gray-700 hover:text-white
// bg-gray-900 text-white
export const Nav = () => {
  return (
    <>
      <div className="border-b-5 border-grey-900 min-h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between ">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "border-b-2 border-indigo-500"
                          : "hover:border-b-2 hover:border-indigo-500 font-medium text-gray-400",
                        "px-3 py-5 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
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
