import AdminNominations from '@pages/admin-nominations/AdminNominations'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/nominations')({
  component: AdminNominations,
})

function RouteComponent() {
  return <div>Hello "/_adminLayout/admin/nominations"!</div>
}
