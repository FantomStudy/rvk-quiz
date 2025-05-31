import AddNominations from '@pages/admin/nominations/AddNominations'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/nominations/add')({
  component: AddNominations,
})
