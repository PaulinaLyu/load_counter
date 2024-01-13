export const MainPage = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto">
        <h2 className="mb-1 text-indigo-700 text-l font-semibold leadi sm:text-xl">
          Описание интерфейса
        </h2>
        <div className="divide-y dark:divide-gray-700">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">Главное меню</h3>
            <p className="md:pl-0 md:col-span-7">Информация о разделах системы</p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">Список уязвимостей</h3>
            <p className="md:pl-0 md:col-span-7">
              Таблица со списком уязвимостей бэкенд-фреймворков. На таблице видны язык
              программирования, название фреймворка и его версия. Также представлены ссылка на
              источник, описание уязвимости и ее актуальность
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">Результаты нагрузочного тестирования</h3>
            <p className="md:pl-0 md:col-span-7">
              Таблица со списоком результатов нагрузочного тестирования, проведенных пользователями.
              На таблице видны язык программирования, название фреймворка и его версия. После этого
              показаны статус нагрузки (Завершен, в процессе, Ошибка), Тип нагрузки (Линейная,
              Константная, Ступенчатая), а также ссылка на визуализацию нагрузки и ее описание
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">Нагрузить фреймворк</h3>
            <p className="md:pl-0 md:col-span-7">
              Таблица с возможными для нагрузки фреймворками, а также интерфейс для настройки
              конфигурации тестирования. Можно выбрать один из трёх типов нагрузки и настроить
              конфигурацию нагрузки.
              <br /> <span className="font-semibold">Константная нагрузка</span> - постоянное
              количество запросов на определенное время; <br />{" "}
              <span className="font-semibold">Линейная</span> - линейно возрастающее количество
              запросов на определенное время;
              <br /> <span className="font-semibold">Ступенчатая</span>- скачкообразно возрастающее
              количество запросов, причем продолжительность - время между скачками;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
