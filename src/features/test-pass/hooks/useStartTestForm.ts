import { type ChangeEvent, type FormEvent, useState } from "react";

import { useStartTest } from "@features/test-session";

interface StartTestFormData {
  number: string;
  nominationId: string;
}

export const useStartTestForm = () => {
  const [form, setForm] = useState<StartTestFormData>({
    number: "",
    nominationId: "",
  });

  const { mutate } = useStartTest();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
      number: form.number,
      nominationId: Number(form.nominationId),
    });
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};
