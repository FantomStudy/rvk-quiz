import TestPage from '@pages/test/TestPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_headerLayout/test')({
  component: TestPage,
})

