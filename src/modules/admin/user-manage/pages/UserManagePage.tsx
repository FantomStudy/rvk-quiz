import { useState } from "react";

import { Input, Table } from "@/components/ui";
import { ComboBoxCell } from "@/components/ui/table/cells/ComboboxCell";

import { useFullnameList, useUpdateUser, useUserList } from "../api/queries";

import styles from "./UserManagePage.module.css";

export const UserManagePage = () => {
  const [search, setSearch] = useState("");
  const userList = useUserList();
  const fullNameList = useFullnameList();

  const updateUser = useUpdateUser();

  if (fullNameList.isLoading || userList.isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!userList.data || !fullNameList.data) {
    return <div>Не удалось загрузить имена из базы</div>;
  }

  const options = fullNameList.data.map((opt) => ({
    id: opt.id,
    text: opt.fullName,
  }));

  const filteredUserList = userList.data.filter((user) =>
    user.number.startsWith(search),
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
                <ComboBoxCell
                  save={({ id }) =>
                    updateUser.mutate({ userId: user.id, fullNameId: id })
                  }
                  initialValue={user.fullName?.fullName || ""}
                  options={options}
                />
                <td>{user.fullName?.branch.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
