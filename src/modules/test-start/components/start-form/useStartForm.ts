import type { ChangeEvent, FormEvent } from "react";

import { useState } from "react";

import { useStartTest } from "../../api/queries";

export const useStartForm = () => {
  const [form, setForm] = useState({
    nominationId: "",
    number: "",
  });

  const { mutate, isPending, error } = useStartTest();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({
      nominationId: Number(form.nominationId),
      number: form.number,
    });
  };

  return {
    form: {
      data: form,
      handleChange,
      handleSubmit,
    },
    request: {
      error,
      isPending,
    },
  };
};
