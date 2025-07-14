import Skeleton from "@/components/ui/skeleton/Skeleton";
import Table from "@/components/ui/table/Table";

import { useBranchStats } from "../../api/queries";

interface BranchRatingProps {
  nominationId?: string;
}

const BranchRating = ({ nominationId }: BranchRatingProps) => {
  const { data, isLoading, error } = useBranchStats(nominationId);

  if (!data || error) {
    return <p>Не удалось загрузить данные рейтинга</p>;
  }

  if (isLoading) {
    return <Skeleton height={300} borderRadius={15} />;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th className="cell_slim">Место</th>
          <th>Филиал</th>
          <th>Номинация</th>
          <th>Общий результат</th>
        </tr>
      </thead>
      <tbody>
        {data.map((br, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{br.branch}</td>
            <td>{br.nomination}</td>
            <td>{br.totalScore}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BranchRating;
