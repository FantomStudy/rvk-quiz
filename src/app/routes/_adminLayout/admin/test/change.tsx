import ChangeTest from '@pages/admin/test/ChangeTest'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/test/change')({
  component: ChangeTest,
})

