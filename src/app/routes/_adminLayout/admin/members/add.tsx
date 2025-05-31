import AddMembers from '@pages/admin/members/AddMembers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/members/add')({
  component: AddMembers,
})
