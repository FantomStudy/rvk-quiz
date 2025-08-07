import { ResultsTable } from "@/components/widgets";

interface UserSessionPageProps {
  nominationId: number;
  userId: number;
}

export const UserSessionPage = ({
  nominationId,
  userId,
}: UserSessionPageProps) => (
  <div className="container">
    <ResultsTable userId={userId} nominationId={nominationId} />
  </div>
);
