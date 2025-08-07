import { api } from "@/shared/config";

export const fetchQuestionPhoto = async (filename: string) => {
  const response = await api.get(`/question/photo/${filename}`, {
    responseType: "blob",
  });

  return URL.createObjectURL(response.data);
};
