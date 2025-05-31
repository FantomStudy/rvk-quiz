import AddBranch from '@pages/admin/branchs/AddBranch'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/branch/add')({
  component: AddBranch,
})