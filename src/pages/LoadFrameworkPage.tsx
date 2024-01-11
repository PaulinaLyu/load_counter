import { useState } from "react";
import { CustomListBox, optionCustomListBox } from "../components/CustomListBox";
import { framework, loadType } from "../mocks/loadFrameworkMock";

export const LoadFrameworkPage = () => {
  const [selectedType, setSelectedType] = useState<optionCustomListBox | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<optionCustomListBox | null>(null);
  return (
    <div className="w-full ">
      <form>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="framework"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Фреймворк
              </label>
              <CustomListBox
                options={framework}
                selected={selectedFramework}
                setSelected={setSelectedFramework}
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="lLoadType"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Тип нагрузки
              </label>
              <CustomListBox
                options={loadType}
                selected={selectedType}
                setSelected={setSelectedType}
              />
            </div>
          </div>
        </div>
        {(selectedType?.id === "line" || selectedType?.id === "step") && (
          <>
            <div className="-mx-3 flex flex-wrap">
              <div
                className={`w-full px-3 ${selectedType?.id === "line" ? "sm:w-1/3" : "sm:w-1/4"}`}
              >
                <div className="mb-5">
                  <label
                    htmlFor="load_from"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    от
                  </label>
                  <input
                    type="number"
                    name="load_from"
                    id="load_from"
                    placeholder="от"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div
                className={`w-full px-3 ${selectedType?.id === "line" ? "sm:w-1/3" : "sm:w-1/4"}`}
              >
                <div className="mb-5">
                  <label
                    htmlFor="load_to"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    до
                  </label>
                  <input
                    type="number"
                    name="load_to"
                    id="load_to"
                    placeholder="до"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div
                className={`w-full px-3 ${selectedType?.id === "line" ? "sm:w-1/3" : "sm:w-1/4"}`}
              >
                <div className="mb-5">
                  <label
                    htmlFor="load_duration"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    {selectedType?.id === "step"
                      ? "Производительность ступени"
                      : "Производительность"}
                  </label>
                  <input
                    type="number"
                    name="load_duration"
                    id="load_duration"
                    placeholder={
                      selectedType?.id === "step"
                        ? "Производительность ступени"
                        : "Производительность"
                    }
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              {selectedType?.id === "step" && (
                <div className="w-full px-3 sm:w-1/4">
                  <div className="mb-5">
                    <label
                      htmlFor="load_step"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Шаг нагрузки
                    </label>
                    <input
                      type="number"
                      name="load_step"
                      id="load_step"
                      placeholder="Шаг нагрузки"
                      min="0"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {selectedType?.id === "const" && (
          <>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="load_from"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Количество запросов
                  </label>
                  <input
                    type="number"
                    name="load_from"
                    id="load_from"
                    placeholder="Количество запросов"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="load_duration"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Производительность
                  </label>
                  <input
                    type="number"
                    name="load_duration"
                    id="load_duration"
                    placeholder="Производительность"
                    min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="mt-4">
          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Нагрузить
          </button>
        </div>
      </form>
    </div>
  );
};
