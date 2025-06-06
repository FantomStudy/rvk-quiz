import CompletePage from '@pages/complete/CompletePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_headerLayout/complete')({
  component: CompletePage,
})
