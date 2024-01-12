import { useEffect, useState } from "react";
import { CustomListBox, optionCustomListBox } from "../components/CustomListBox";
import { useForm, SubmitHandler } from "react-hook-form";
import { loadType } from "@/mocks/loadFrameworkMock";
import { getLoadableFrameworks, postMakeLoad } from "@/api";
import { GET_LOADS_URL } from "@/consts";
import { toast } from "react-toastify";
import { Button } from "@/components/Button";

interface IFormInput {
  framework: optionCustomListBox;
  loadType: optionCustomListBox;
  load_from: number;
  load_to: number;
  load_duration: number;
  load_step: number;
}

interface selectedFrameworkType extends optionCustomListBox {
  framework_lang: string;
  framework_name: string;
  framework_version: string;
}

export const LoadFrameworkPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const [selectedType, setSelectedType] = useState<optionCustomListBox>(loadType[0]);
  const [selectedFramework, setSelectedFramework] = useState<selectedFrameworkType | null>(null);
  const [frameworkOptions, setFrameworkOptions] = useState<optionCustomListBox[]>([]);
  const [isLoading, setIsLoadingOptions] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsLoadingOptions(true);
    const requestBody = {
      framework_name: selectedFramework?.framework_name || "",
      framework_lang: selectedFramework?.framework_lang || "",
      framework_version: selectedFramework?.framework_version || "",
      load_name: selectedType?.id || "",
      load_from: +data?.load_from || 0,
      load_to: +data?.load_to || 0,
      load_duration: +data?.load_duration || 0,
      load_step: +data?.load_step || 0,
      load_request_type: "HTTP JSON",
    };

    postMakeLoad(requestBody)
      .then((response) => {
        setIsLoadingOptions(false);
        toast.success(response.data.response);
      })
      .catch((e) => {
        setIsLoadingOptions(false);
        toast.error(e.message);
      });
  };

  const fetchFrameworkOptions = async () => {
    const response = await getLoadableFrameworks();
    if (response) {
      const dataResp: any = response?.data?.response;
      if (dataResp) {
        const updatedData = dataResp.map((item: any) => ({
          ...item,
          name: `${item.framework_name}(${item.framework_lang}) - ${item.framework_version}`,
          id: item.framework_name + item.framework_lang + item.framework_version,
        }));
        setSelectedFramework(updatedData[0]);
        setFrameworkOptions(updatedData);
      }
    } else {
      console.error(`Ошибка запроса ${GET_LOADS_URL}`);
    }
  };

  useEffect(() => {
    fetchFrameworkOptions();
  }, []);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
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
                options={frameworkOptions}
                selected={selectedFramework}
                setSelected={setSelectedFramework}
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label htmlFor="loadType" className="mb-3 block text-base font-medium text-[#07074D]">
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
                    {...register("load_from")}
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
                    {...register("load_to")}
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
                    {...register("load_duration")}
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
                      {...register("load_step")}
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
          <Button isLoading={isLoading} title="Нагрузить" type="submit" />
        </div>
      </form>
    </div>
  );
};
