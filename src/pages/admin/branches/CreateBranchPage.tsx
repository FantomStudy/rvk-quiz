import { type ChangeEvent, type FormEvent, useState } from "react";

import { useCreateBranch } from "@features/admin/branch-control/useCreateBranch";

import { Button, Input } from "@shared/ui";
import ButtonLink from "@shared/ui/button/ButtonLink";

import styles from "../FormPageLayout.module.css";

const CreateBranchPage = () => {
  const [address, setAddress] = useState<string>("");
  const { mutate, isPending, isError, error } = useCreateBranch();

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

        <ButtonLink size="l" color="danger" to="/admin/branches">
          Назад
        </ButtonLink>
      </div>
    </div>
  );
};

export default CreateBranchPage;
