import { toast } from "react-toastify";

export const saveToastSuccess = () => {
  const toastId = "save-toast-success";
  toast.success("Сохранено", { toastId });
};

export const saveToastError = () => {
  const toastId = "save-toast-error";
  toast.success("Сохранено", { toastId });
};
