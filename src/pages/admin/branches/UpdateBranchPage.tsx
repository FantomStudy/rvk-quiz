import { type ChangeEvent, type FormEvent, useState } from "react";

import { getRouteApi } from "@tanstack/react-router";

import { useDeleteBranch } from "@features/admin/branch-control/useDeleteBranch";
import { useUpdateBranch } from "@features/admin/branch-control/useUpdateBranch";

import { Button, Input } from "@shared/ui";

import styles from "../FormPageLayout.module.css";

const route = getRouteApi("/_adminLayout/admin/branches/$branchId");

const UpdateBranchPage = () => {
  const { branch } = route.useLoaderData();

  const [address, setAddress] = useState<string>(branch.address);

  const updateBranch = useUpdateBranch();
  const deleteBranch = useDeleteBranch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateBranch.mutate({ id: branch.id, branch: { address } });
  };

  return (
    <div className={styles.container}>
      <h1>Изменение филиала</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="branch">Филиал</label>
          <Input
            id="branch"
            value={address}
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
            Изменить
          </Button>
        </form>

        <Button
          size="l"
          color="danger"
          onClick={() => deleteBranch.mutate(branch.id)}
          disabled={deleteBranch.isPending}
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default UpdateBranchPage;
