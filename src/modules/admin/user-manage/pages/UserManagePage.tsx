import { useState } from "react";

import type { Branch, User } from "@/types";

import { EditableCell, Input, SelectableCell, Table } from "@/components/ui";

import { useUpdateUser } from "../api/queries";

import styles from "./UserManagePage.module.css";

interface UserManagePageProps {
  branchList: Branch[];
  userList: User[];
}

export const UserManagePage = ({
  userList,
  branchList,
}: UserManagePageProps) => {
  const [search, setSearch] = useState("");
  const updateUser = useUpdateUser();

  const filteredUserList = userList.filter((user) =>
    user.number.startsWith(search)
  );

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.searchContainer}>
          <Input
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Введите номер"
          />
          <img alt="search" src="/icons/search.svg" />
        </div>
        <Table>
          <thead>
            <tr>
              <th>Номер</th>
              <th>ФИО</th>
              <th>Филиал</th>
            </tr>
          </thead>
          <tbody>
            {filteredUserList.map((user) => (
              <tr key={user.number}>
                <td>{user.number}</td>
                <EditableCell
                  save={(fullName) => {
                    updateUser.mutate({
                      userId: user.id,
                      userData: { fullName, branchId: null },
                    });
                  }}
                  initialValue={user.fullName ?? ""}
                />

                <SelectableCell
                  save={(branchId) => {
                    updateUser.mutate({
                      userId: user.id,
                      userData: { branchId, fullName: null },
                    });
                  }}
                  initialValue={user.branch ? user.branch.id.toString() : ""}
                  label={user.branch ? user.branch.address : ""}
                  options={branchList.map((branch) => ({
                    value: branch.id,
                    label: branch.address,
                  }))}
                />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
