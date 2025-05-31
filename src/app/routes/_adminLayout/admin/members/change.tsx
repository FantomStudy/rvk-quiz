import ChangeMembers from '@pages/admin/members/ChangeMembers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/members/change')({
  component: ChangeMembers,
})