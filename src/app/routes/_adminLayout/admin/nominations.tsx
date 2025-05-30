import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_adminLayout/admin/nominations')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_adminLayout/admin/nominations"!</div>
}
