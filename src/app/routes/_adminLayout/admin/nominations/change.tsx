import ChangeNominations from '@pages/admin/nominations/ChangeNominations'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/nominations/change')({
  component: ChangeNominations,
})

