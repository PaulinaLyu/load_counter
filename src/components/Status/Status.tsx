import { StatusProps } from "./Status.type";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export const Status = ({ status }: StatusProps) => {
  return (
    <>
      {status ? (
        <CheckCircleIcon className="w-6 h-6 text-lime-500" />
      ) : (
        <XCircleIcon className="w-6 h-6 text-red-500" />
      )}
    </>
  );
};
