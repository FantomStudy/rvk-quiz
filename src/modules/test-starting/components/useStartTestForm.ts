import { type ChangeEvent, type FormEvent, useState } from "react";

import { useStartTest } from "../api/queries";

export const useStartTestForm = () => {
  const [form, setForm] = useState({
    number: "",
    nominationId: "",
  });

  const { mutate: startTest } = useStartTest();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTest({
      number: form.number,
      nominationId: Number(form.nominationId),
    });
  };

  return { form, handleChange, handleSubmit };
};
