import { type ChangeEvent, type FormEvent, useState } from "react";

import { useDeleteBranch } from "@features/admin/branch-delete/useDeleteBranch";
import { useUpdateBranch } from "@features/admin/branch-update/useUpdateBranch";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const UpdateBranchPage = () => {
  const [address, setAddress] = useState("");

  const updateBranch = useUpdateBranch();
  const deleteBranch = useDeleteBranch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateBranch.mutate({ id: "", newData: { address } });
  };

  return (
    <div className={styles.container}>
      <h1>Изменение филиала</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="branch">Филиал</label>
        <Input
          id="branch"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAddress(e.target.value)
          }
        />
        {updateBranch.isError && (
          <div className={styles.error}>{updateBranch.error.message}</div>
        )}
        <Button
          size="l"
          type="submit"
          color="primary"
          disabled={updateBranch.isPending}
        >
          Сохранить
        </Button>
        <Button
          size="l"
          color="danger"
          onClick={() => deleteBranch.mutate("")}
          disabled={deleteBranch.isPending}
        >
          Удалить
        </Button>
      </form>
    </div>
  );
};

export default UpdateBranchPage;
