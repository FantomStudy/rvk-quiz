import { Skeleton } from "@/components/ui";
import { Table } from "@/components/ui/table/Table";

import { useBranchStats } from "../../api/queries";

interface BranchRatingProps {
  nominationId?: string;
}

export const BranchRating = ({ nominationId }: BranchRatingProps) => {
  const { data, isLoading, error } = useBranchStats(nominationId);

  if (!data || error) {
    return <p>Не удалось загрузить данные рейтинга</p>;
  }

  if (isLoading) {
    return <Skeleton height={300} borderRadius={15} />;
  }

  return (
    <Table height={300}>
      <thead>
        <tr>
          <th>Филиал</th>
          <th>Номинация</th>
          <th>Общий результат</th>
          <th>Место</th>
        </tr>
      </thead>
      <tbody>
        {data.map((str, index) => (
          <tr key={str.branch}>
            <td>{str.branch}</td>
            <td>{str.nomination}</td>
            <td>{str.totalScore}</td>
            <td>{index + 1}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
