import { type ChangeEvent, type FormEvent, useState } from "react";

import { useNavigate } from "@tanstack/react-router";

import { useCreateBranch } from "@features/admin/branch-control/useCreateBranch";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const CreateBranchPage = () => {
  const [address, setAddress] = useState("");
  const { mutate, isPending, isError, error } = useCreateBranch();

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ address });
  };

  return (
    <div className={styles.container}>
      <h1>Добавление филиала</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="branch">Филиал</label>
          <Input
            id="branch"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAddress(e.target.value)
            }
          />

          {isError && <div className={styles.error}>{error.message}</div>}

          <Button size="l" color="primary" type="submit" disabled={isPending}>
            Создать
          </Button>
        </form>

        <Button
          size="l"
          color="danger"
          onClick={() => navigate({ to: "/admin/branches" })}
        >
          Назад
        </Button>
      </div>
    </div>
  );
};

export default CreateBranchPage;
