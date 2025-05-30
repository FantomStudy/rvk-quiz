import AddTest from '@pages/admin/test/AddTest'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/test/add')({
  component: AddTest,
})
