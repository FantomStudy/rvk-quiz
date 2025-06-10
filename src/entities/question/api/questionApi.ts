import api from "@shared/api";

import type {
  CreateQuestion,
  Question,
  QuestionWithAnswer,
} from "../model/question";

export const fetchQuestionList = async (nominationId: number) => {
  const response = await api.get<QuestionWithAnswer[]>(
    `/question/all-by-nomination/${nominationId}`,
  );

  return response.data;
};

export const fetchQuestion = async (id: number) => {
  const response = await api.get<Question>(`/question/by-id/${id}`);
  return response.data;
};

// CRUD API
export const createQuestion = async (newQuestion: CreateQuestion) => {
  const response = await api.post("/question/create", newQuestion, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const updateQuestion = async (id: number, newData: CreateQuestion) => {
  const response = await api.put(`/question/update/${id}`, newData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteQuestion = async (id: number) => {
  const response = await api.delete(`/question/delete/${id}`);
  return response.data;
};
