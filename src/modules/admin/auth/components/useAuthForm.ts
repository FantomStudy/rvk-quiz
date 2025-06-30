import { type ChangeEvent, type FormEvent, useState } from "react";

import { useLoginMutation } from "../api/queries";

export const useAuthForm = () => {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const { mutate: login, isPending, isError, error } = useLoginMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(form);
  };

  return {
    form: {
      values: form,
      onChange: handleChange,
      onSubmit: handleSubmit,
    },
    request: {
      isPending,
      isError,
      error,
    },
  };
};
