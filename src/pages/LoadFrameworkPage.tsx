export const LoadFrameworkPage = () => {
  return (
    <div className="w-full max-w-[550px]">
      <form>
        <div className="mb-5">
          <label htmlFor="framework" className="mb-3 block text-base font-medium text-[#07074D]">
            Фреймворк
          </label>
          <input
            type="text"
            name="framework"
            id="framework"
            placeholder="Фреймворк"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="lLoadType" className="mb-3 block text-base font-medium text-[#07074D]">
            Тип нагрузки
          </label>
          <input
            type="text"
            name="lLoadType"
            id="lLoadType"
            placeholder="Тип нагрузки"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        {/* <div className="mb-5">
          <label for="guest" className="mb-3 block text-base font-medium text-[#07074D]">
            How many guest are you bringing?
          </label>
          <input
            type="number"
            name="guest"
            id="guest"
            placeholder="5"
            min="0"
            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div> */}

        {/* <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label for="date" className="mb-3 block text-base font-medium text-[#07074D]">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label for="time" className="mb-3 block text-base font-medium text-[#07074D]">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div> */}

        <div>
          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Нагрузить
          </button>
        </div>
      </form>
    </div>
  );
};
