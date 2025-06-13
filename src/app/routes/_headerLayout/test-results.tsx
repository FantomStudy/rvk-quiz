import { createFileRoute } from "@tanstack/react-router";

import TestResultsPage from "@pages/testResults/TestResultsPage";

export const Route = createFileRoute("/_headerLayout/test-results")({
  component: TestResultsPage,
});
