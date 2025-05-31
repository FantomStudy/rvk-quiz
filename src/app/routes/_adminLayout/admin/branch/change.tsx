import ChangeBranch from '@pages/admin/branchs/ChangeBranch'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/branch/change')({
  component: ChangeBranch,
})
